require('dotenv').config()
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const mongoose = require('mongoose');
const User = require('./user')
const Home = require('./home')
const PinSetting = require('./pinSettings')
const sha256 = require('sha256')

// lorem settings
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 8,
    min: 4
  }
});

mongoose.connect(process.env.MONGOOSE_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('DB connected');
});

const testSetting = new PinSetting({
  name: lorem.generateWords(1),
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input',
  availableCommands: ['Выключить свет на кухне', 'Включить свет на кухне']
})

const testSetting1 = new PinSetting({
  name: lorem.generateWords(1),
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input',
  availableCommands: ['Выключить свет в гараже', 'Включить свет в гараже']
})

const testSetting2 = new PinSetting({
  name: lorem.generateWords(1),
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input',
  availableCommands: ['Выключить свет в подвале', 'Включить свет в подвале']
})

async function seedHome() {
  const dbArrPinSettings = await PinSetting.find()
  const ArIdrPinSettings = dbArrPinSettings.map(el => el._id)
  const home = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
    pinSettingsId:[ArIdrPinSettings[0],ArIdrPinSettings[2]]
  })

  const home1 = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
    pinSettingsId:[ArIdrPinSettings[0], ArIdrPinSettings[1]]

  })

  await Home.insertMany([home, home1]);
  console.log('Homes added');
}

async function seed(model, arr) {
  await model.insertMany(arr);
  console.log('Pins added');
}

async function seedUser() {
  const dbArrHomes = await Home.find()
  const ArrIdHomes = dbArrHomes.map(el => el._id)


  const testUser = new User({
    name: lorem.generateWords(1),
    password: sha256('123'),
    email: lorem.generateWords(1),
    tgLogin: [lorem.generateWords(1),lorem.generateWords(1),lorem.generateWords(1)],
    homes: ArrIdHomes,
  })

  await testUser.save()
  await mongoose.disconnect();
  console.log('Users added');
  console.log('DB disconnected');
}

async function seedAll(){
  await seed(PinSetting, [testSetting, testSetting1, testSetting2])
  await seedHome()
  await seedUser()
}
seedAll()
