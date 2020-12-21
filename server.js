const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const Gpio = require('onoff').Gpio; // Gpio class
// const { Text2Sound, Sound2Text } = require('./api');
const Omx = require('node-omxplayer');
const cors = require('cors');
const sendAlertToTG = require('./bot');

const app = express();

app.use(cors());
app.use(express.json());

let player = Omx(); // Создаем объект player

// Входнаые сигналы (подтянуты на 3.3V)
const gpioBn1 = new Gpio(2, 'in', 'rising', { debounceTimeout: 300 });
const gpioBn2 = new Gpio(3, 'in', 'rising', { debounceTimeout: 300 });
const gpioBn3 = new Gpio(4, 'in', 'rising', { debounceTimeout: 300 });
const gpioBn4 = new Gpio(0, 'in', 'rising', { debounceTimeout: 300 });
const gpioSensDoor = new Gpio(5, 'in', 'both', { debounceTimeout: 1000 });

// Выходнаые сигналы
const gpioLamp = new Gpio(14, 'out');
const gpioLeds = new Gpio(15, 'out');
const gpioDiscoBall = new Gpio(18, 'out');

// Чтение первоначальных состояний входов
// let inputBn1 = Boolean(gpioBn1.readSync()); // кнопка 1 - свет выкл
// let inputBn2 = Boolean(gpioBn2.readSync()); // кнопка 2 - гирлянда ВКЛ
// let inputBn3 = Boolean(gpioBn3.readSync()); // кнопка 3 - дискошар ВКЛ
// let inputBn4 = Boolean(gpioBn4.readSync()); // кнопка 2 - музыка ВКЛ
let inputDoor = Boolean(gpioSensDoor.readSync()); // датчик открытия двери
console.log(inputDoor);
gpioBn1.watch(() => {
  console.log('Button 1 pressed');
});

gpioBn2.watch(() => {
  console.log('Button 2 pressed');
});

gpioBn3.watch(() => {
  console.log('Button 3 pressed');
});

gpioBn4.watch(() => {
  console.log('Button 4 pressed');
});

gpioSensDoor.watch(async function (err, value) {
  inputDoor = Boolean(value);
  const msg = inputDoor ? 'Open' : 'Close';
  // console.log(msg);
  sendAlertToTG(process.env.CHAT_ID, msg);
  // gpioLamp.writeSync(value);

  /* const sendMessage = await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=hello`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text: 'hello',
      }),
      // })
      // ctx.telegram.sendMessage(ctx.message.chat.id, someText);
    } 
  ); */



});

// function to run when user closes using ctrl+c
/* process.on('SIGINT', () => {
  gpioBn1.unexport();
  gpioBn2.unexport();
  gpioBn3.unexport();
  gpioBn4.unexport();
  gpioSensDoor.unexport();
  gpioLamp.unexport();
  gpioLeds.unexport();
  gpioDiscoBall.unexport();
}); */

app.put('/', async (req, res) => {

  let { command } = req.body;
  console.log('\x1b[1m\x1b[33m%s\x1b[0m', command);

  command = command.toLowerCase();
  switch (command) {
    case 'включить свет':
      gpioLamp.writeSync(1);
      player.newSource('data/light_on.ogg');
      res.sendStatus(200);
      break;
    case 'выключить свет':
      gpioLamp.writeSync(0);
      player.newSource('data/light_off.ogg');
      res.sendStatus(200);
      break;
    case 'проверить окна':
      if (isWndClose) player.newSource('data/window_closed.ogg');
      else player.newSource('data/window_opened.ogg');
      res.sendStatus(200);
      break;
    case 'включить музыку':
      player.newSource('data/sound.mp3');
      res.sendStatus(200);
      break;
    case 'выключить музыку':
      player.newSource('data/music_stop.ogg');
      res.sendStatus(200);
      break;
    default:
      player.newSource('data/repeat_please.ogg');
      res.sendStatus(200);
      break;
  }
})

app.put('/volume', (req, res) => {
  // const text = Sound2Text('zavtra.ogg');
  Text2Sound('Денег нет, но вы держитесь. Всего Вам доброго и хорошего.', 'alena');
})

app.listen(3333, () => {
  console.log('\x1b[1m\x1b[32m%s\x1b[0m', 'Server is running!');
});

// omxplayer data/output.ogg -o local --no-osd -