require('dotenv').config();
const express = require('express');
const Gpio = require('onoff').Gpio; // Gpio class
const { Text2Sound, Sound2Text } = require('./api');

var Omx = require('node-omxplayer');

const cors = require('cors');

const app = express();

const LED = new Gpio(17, 'out');       // Export GPIO17 as an output
let pushButton = new Gpio(27, 'in', 'both'); //use GPIO pin 27 as input, and 'both' button presses, and releases should be handled

app.use(cors());
app.use(express.json());

// Создаем объект player
let player = Omx();
let isWndClose = true;

pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    // console.error('There was an error', err); //output error message to console
    return;
  }
  isWndClose = Boolean(value);
  console.log(isWndClose ? 'close' : 'open');
  // LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
});

function unexportOnClose() { //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c


app.put('/', async (req, res) => {

  let { command } = req.body;
  console.log('\x1b[1m\x1b[33m%s\x1b[0m', command);

  command = command.toLowerCase();
  switch (command) {
    case 'включить свет':
      LED.writeSync(1);
      player.newSource('data/light_on.ogg');
      break;
    case 'выключить свет':
      LED.writeSync(0);
      player.newSource('data/light_off.ogg');
      break;
    case 'проверить окна':
      if (isWndClose) player.newSource('data/window_closed.ogg');
      else player.newSource('data/window_opened.ogg');
      break;
    case 'включить музыку':
      player.newSource('data/sound.mp3');
      break;
    case 'выключить музыку':
      player.newSource('data/music_stop.ogg');
      break;
    default:
      player.newSource('data/repeat_please.ogg');
      break;
  }
  res.send('Hello from raspberry!');
})

app.put('/volume', (req, res) => {
  // const text = Sound2Text('zavtra.ogg');
  Text2Sound('Денег нет, но вы держитесь. Всего Вам доброго и хорошего.', 'alena');
})

app.listen(3333, () => {
  console.log('\x1b[1m\x1b[32m%s\x1b[0m', 'Server is running!');
});

// omxplayer data/output.ogg -o local --no-osd -
