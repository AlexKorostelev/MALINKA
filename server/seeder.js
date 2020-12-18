require('dotenv').config()
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const mongoose = require('mongoose');
const User = require('./models/user')
const Home = require('./models/home')
const PinSettings = require('./models/pinSettings')
const UserTg = require('./models/userTg')
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

mongoose.connect(process.env.MONGOOSE_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('DB connected');
});

const testSetting = new PinSettings({
  name: lorem.generateWords(1),
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input'
})

const testSetting1 = new PinSettings({
  name: lorem.generateWords(1),
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input'
})

const testSetting2 = new PinSettings({
  name: lorem.generateWords(1),
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input'
})

async function seedHome() {
  const dbArrPinSettings = await PinSettings.find()
  const ArIdrPinSettings = dbArrPinSettings.map(el => el._id)

  const home = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
    pinSettingsId: [ArIdrPinSettings[0]]
  })

  const home1 = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
    pinSettingsId: [ArIdrPinSettings[1], ArIdrPinSettings[2]]
  })

  await Home.insertMany([home, home1]);
  await mongoose.disconnect();
  console.log('DB disconnected');
}

async function seed(model, arr) {
  await model.insertMany(arr);
  await mongoose.disconnect();
  console.log('DB disconnected');
}

async function seedUser() {
  const dbArrHomes = await Home.find()
  console.log(dbArrHomes);
  const ArrIdHomes = dbArrHomes.map(el => el._id)
  console.log(ArrIdHomes);

  const testUser = new User({
    name: lorem.generateWords(1),
    password: sha256('123'),
    email: lorem.generateWords(1),
    homes: ArrIdHomes,
  })

  await testUser.save()
  await mongoose.disconnect();
  console.log('DB disconnected');
}

// seedUser()
// seedHome()
// seed(PinSettings, [testSetting, testSetting1, testSetting2])
