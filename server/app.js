/* eslint-disable import/order */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
// const Omx = require('node-omxplayer');
// const { Gpio } = require('onoff');
const authRoutes = require('./routes/auth');
const userMiddeleware = require('./middelware/user');
const varMiddelware = require('./middelware/variables');

const PinSetting = require('./models/pinSettings');
// const sendAlertToTG = require('./src/bot');

//const Gpio = require('onoff').Gpio;
const Omx = require('node-omxplayer');
const sendAlertToTG = require('./src/bot');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Входные сигналы (подтянуты на 3.3V)
// const gpioBn1 = new Gpio(2, 'in', 'rising', { debounceTimeout: 300 });
// const gpioBn2 = new Gpio(3, 'in', 'rising', { debounceTimeout: 300 });
// const gpioBn3 = new Gpio(4, 'in', 'rising', { debounceTimeout: 300 });
// const gpioBn4 = new Gpio(0, 'in', 'rising', { debounceTimeout: 300 });
// const gpioSensDoor = new Gpio(5, 'in', 'both', { debounceTimeout: 500 });

// Выходные сигналы
// const gpioLamp = new Gpio(14, 'out');
// const gpioLeds = new Gpio(15, 'out');
// const gpioDiscoBall = new Gpio(18, 'out');


// const player = Omx(); // Создаем объект player

const indexRouter = require('./routes/index');
const dataRouter = require('./routes/data');

// const { debuglog } = require('util');
// const commandRouter = require('./routes/command');

mongoose.connect(
  process.env.MONGOOSE_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('DB connected');
  },
);

let db;

const pingSettings = async () => {
  db = await PinSetting.find().populate();
};

pingSettings();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(
  session({
    secret: 'fdlk',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.createConnection(
        process.env.MONGOOSE_CONNECT,
        { useNewUrlParser: true, useUnifiedTopology: true },
      ),
    }),
  }),
);


app.use(userMiddeleware);
app.use(varMiddelware);

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
});

// routes
// пример включить лампочку
app.get('/socketon', (req, res) => {
  db[0].state = true;
  console.log(db);
  io.emit('message', db);
  res.sendStatus(200);
});

// пример выключить лампочку
app.get('/socketoff', (req, res) => {
  db[0].state = false;
  console.log(db);
  io.emit('message', db);
  res.sendStatus(200);
});

app.get('/data', async (req, res) => {
  console.log(db);
  res.json(db);
});

app.use('/', indexRouter);
app.use('/auth', authRoutes);
app.use('/data', dataRouter);
// app.use('/command', commandRouter);

// Чтение первоначальных состояний входов
// let inputBn1 = Boolean(gpioBn1.readSync()); // кнопка 1 - свет выкл
// let inputBn2 = Boolean(gpioBn2.readSync()); // кнопка 2 - гирлянда ВКЛ
// let inputBn3 = Boolean(gpioBn3.readSync()); // кнопка 3 - дискошар ВКЛ
// let inputBn4 = Boolean(gpioBn4.readSync()); // кнопка 2 - музыка ВКЛ

// let inputDoor = Boolean(gpioSensDoor.readSync()); // датчик открытия двери
// console.log(inputDoor);
// gpioBn1.watch(() => {
//   console.log('Button 1 pressed');
// });

// gpioBn2.watch(() => {
//   console.log('Button 2 pressed');
// });

// gpioBn3.watch(() => {
//   console.log('Button 3 pressed');
// });

// gpioBn4.watch(() => {
//   console.log('Button 4 pressed');
// });

// gpioSensDoor.watch(async (err, value) => {
//   inputDoor = Boolean(value);
//   const msg = inputDoor ? 'Open' : 'Close';
//   console.log(msg);
//   sendAlertToTG(process.env.CHAT_ID, msg);
// });


app.put('/command', async (req, res) => {
  const { command } = req.body;
  console.log('\x1b[1m\x1b[33m%s\x1b[0m', command);


  // command = command.toLowerCase();
  // switch (command) {
  //   case 'включить свет':
  //     gpioLamp.writeSync(1);
  //     player.newSource('data/light_on.ogg');
  //     res.sendStatus(200);
  //     break;
  //   case 'выключить свет':
  //     gpioLamp.writeSync(0);
  //     player.newSource('data/light_off.ogg');
  //     res.sendStatus(200);
  //     break;
  //   case 'проверить окна':
  //     if (isWndClose) player.newSource('data/window_closed.ogg');
  //     else player.newSource('data/window_opened.ogg');
  //     res.sendStatus(200);
  //     break;
  //   case 'включить музыку':
  //     player.newSource('data/sound.mp3');
  //     res.sendStatus(200);
  //     break;
  //   case 'выключить музыку':
  //     player.newSource('data/music_stop.ogg');
  //     res.sendStatus(200);
  //     break;
  //   default:
  //     player.newSource('data/repeat_please.ogg');
  //     res.sendStatus(200);
  //     break;
  // }
});


