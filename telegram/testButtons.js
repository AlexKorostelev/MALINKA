require('dotenv').config();
const Telegraf = require('telegraf');
// Общие настройки
const config = {
  "token": process.env.BOT_TOKEN
};
// Создаем объект бота
const bot = new Telegraf(config.token, {});
// кнопки меню
const menu = () => {
  return Telegraf.Extra
    .markup((m) =>
      m.inlineKeyboard([
        [
          m.callbackButton('Press 0', '0'),
          m.callbackButton('Press 1', '1')
        ]
      ])
    )
};
// Старт бота
bot.start((ctx) => ctx.reply('Type me something'));
// слушаем
bot
  .on('message', (ctx) => {
    ctx.reply("Выберите действие.", menu());
  })
  .on('callback_query', (ctx) => {
    // отвечаем телеграму что получили от него запрос
    ctx.answerCbQuery();
    // удаляем сообщение
    // ctx.deleteMessage();
    // отвечаем на нажатие кнопки
    ctx.reply(`You press ${ctx.callbackQuery.data}`, menu())
  });
// запускаем бот
bot.launch();
