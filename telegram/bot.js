require('dotenv').config();
const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');
const request = require('request');
const fs = require('fs');
const mongoose = require('mongoose');
const User = require('./models/user');
const Home = require('./models/home');
const telegramBotToken = process.env.BOT_TOKEN;
const folderId = process.env.FOLDER_ID;
const yandexToken = process.env.YANDEX_TOKEN;
const mongoDB = process.env.MONGOOSE_DB;
const bot = new Telegraf(telegramBotToken);

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', async () => {
  console.log('MongoDB database connection established successfully');
});

const checkIfRegistered = async (ctx, next) => {
  const userFound = await User.find({});
  try {
    if(ctx.update?.callback_query?.message?.chat?.username){
      if (userFound[0].tgLogin.includes(ctx.update.callback_query.message.chat.username)) {
        await next();
      } else {
        ctx.reply(
          `Dear!!!! ${ctx.update.callback_query.message.chat.username}! You have not been registered by our managers`
        );
      }
    }else{
      if (userFound[0].tgLogin.includes(ctx.update.message.from.username)) {
        await next();
      } else {
        ctx.reply(
          `Dear, ${ctx.update.message.from.username}! You have not been registered by our managers`
        );
      }
    }
  } catch (error) {
    console.log('sorry guys', error);
  }
};

const giveNameToFile = (userIdTg) => {
  let localDate = new Date(Date.now()).toISOString().toString().slice(0, -5);

  const dir = `./allTheSounds/${userIdTg}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return `./allTheSounds/${userIdTg}/${userIdTg}_${localDate}.ogg`;
};

bot.use(checkIfRegistered);

bot.start(async (ctx) => {
  ctx.reply(`Greetings, ${ctx.message.from.username}!\nThe company "IoT Russia" wishes you and your loved ones the best!\n Please, use the following commands to navigate in the app\n /help - to get "About" page with all available comands\n/myHomes - to get the list of all the homes available to you`);
});

bot.help(async (ctx) => {
  ctx.reply(`We are happy to give you a hand in navigating through the App, ${ctx.message.from.username}!\nOffical webpage: https://iot-russia.com\n\n/myHomes - to get the list of all the homes available to you`);
});

const menu = (listOfHomes) => {
  return Telegraf.Extra
    .markup((m) =>
      m.inlineKeyboard([
        [
          m.callbackButton(listOfHomes[0], listOfHomes[0]),
          m.callbackButton(listOfHomes[1], listOfHomes[1])
        ]
      ])
    )
};

bot.command('myHomes', async (ctx) => {
  let userHomes = await User.find({}).populate('homes');
  console.log(userHomes[0].homes)
  let userHomesToReturn = userHomes[0].homes.map(
    (eachHome) => `${eachHome.name}`
  );
 
  ctx.reply(`Please, find below the list of homes available to you:\n`, menu(userHomesToReturn))

  bot.action(userHomesToReturn[0],(ctx)=>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, `Please, find below the list of OPERATIONS available to you:\n"Включить свет"\n"Выключить свет"`, {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: `BACK`, callback_data: 'BACK' },
          ],
        ],
        selective: true
      }),
    });
  })

  bot.action(userHomesToReturn[1],(ctx)=>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, `Please, find below the list of OPERATIONS available to you:\n"Включить свет"\n"Выключить свет"`, {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: `BACK`, callback_data: 'BACK' },
          ],
        ],
        selective: true
      }),
    });
  })

  bot.action('BACK',(ctx)=>{
    ctx.deleteMessage()
    ctx.reply('Please, find below the list of homes available to you:\n',menu(userHomesToReturn))
  })
});

bot.on('message', async (ctx) => {
  
  if (!ctx.update.message.voice) {
    ctx.reply('Could you please send Audio message instead');
    return;
  }
  try {
    const fileID = ctx.update.message.voice.file_id;
    const response = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/getFile?file_id=${fileID}`
    );
    const rez = await response.json();
    let nameOfTheFile = giveNameToFile(ctx.update.message.from.id);

    const file = fs.createWriteStream(nameOfTheFile);

    function sound2Text(fileName) {
      let binary = fs.readFileSync(`./${fileName}`);

      const options = {
        method: 'POST',
        url: `https://stt.api.cloud.yandex.net/speech/v1/stt:recognize?lang=ru-RU&topic=general&profanityFilter=false&format=oggopus&sampleRateHertz=16000&folderId=${folderId}`,
        headers: {
          'Content-Type': 'audio/ogg',
          Authorization: `Bearer ${yandexToken}`,
        },
        body: binary,
      };
      request(options, async(error, response) => {
        if (error) throw new Error(error);
        await fetch('http://192.168.1.53:3333/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({command: JSON.parse(response.body).result}),
          });
        console.log(
          '\x1b[1m\x1b[33m%s\x1b[0m',
          JSON.parse(response.body).result
        );
      });
    }
    fetch(
      `https://api.telegram.org/file/bot${telegramBotToken}/${rez.result.file_path}`
    )
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            response.body.pipe(file);
            file.on('finish', () => {
              setTimeout(() => {
                resolve();
              });
            });
          })
      )
      .then(() => {
        sound2Text(nameOfTheFile);
      });
  } catch (error) {
    console.log('Unfortunately, we have got an error, milord\n', error);
  }
});

bot.launch();



