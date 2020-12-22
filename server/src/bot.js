const fetch = require('node-fetch');
require('dotenv').config();

/* const sendAlertToTG = async (chatID, messageText) => {
  console.log(chatID);
  console.log(messageText);
  console.log(process.env.BOT_TOKEN);
  // chatID should be declared in Raspberry app.js
  await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chatID}&text=${messageText}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        chat_id: chatID,
        text: messageText,
      }),
    }
  );
}; */

const sendAlertToTG = async (chatID, messageText) => {
  //chatID should be declared in Raspberry app.js
  await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chatID}&text=${messageText}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        chat_id: chatID,
        text: messageText,
      }),
    }
  );
};

module.exports = sendAlertToTG;