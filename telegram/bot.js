require('dotenv').config();
const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');
const request = require('request');
const fs = require('fs');
const mongoose = require('mongoose');
const User = require('./user');
const Home = require('./home');
const telegramBotToken = process.env.BOT_TOKEN;
const folderId = process.env.FOLDER_ID;
const yandexToken = process.env.YANDEX_TOKEN;
const mongoDB = process.env.MONGOOSE_DB;
const bot = new Telegraf(telegramBotToken);

mongoose.connect(mongoDB, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', async () => {
  console.log('MongoDB database connection established successfully');
});

let userTelegramName = '';
bot.start(async (ctx) => {
  userTelegramName = ctx.message.from.username;
  ctx.reply(`Greetings, ${userTelegramName}`);
});
bot.help(async (ctx) => {
  ctx.reply(`I am ready to give you a hand, ${userTelegramName}`);
});
bot.command('myHomes', async (ctx) => {
  let userHomes = await User.findOne({ tgLogin: userTelegramName }).populate('homes');
  let userHomesToReturn = userHomes.homes.map(
    (eachHome) => `${eachHome.name}`
  );
  ctx.reply(`Here is the list of your homes:\n${userHomesToReturn.join('\n')}`);
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
    console.log(ctx.update.message);

    const file = fs.createWriteStream('file.ogg');

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
      request(options, (error, response) => {
        if (error) throw new Error(error);
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
        sound2Text('file.ogg');
      });
  } catch (error) {
    console.log('Unfortunately, we have got an error, milord\n', error);
  }
});
bot.launch();
