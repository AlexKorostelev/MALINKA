require('dotenv').config()
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const mongoose = require('mongoose');
const User = require('./user')
const Home = require('./home')
const PinSettings = require('./pinSettings')
const UserTg = require('./userTg')
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

  const home = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
  })

  const home1 = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
  })

  await Home.insertMany([home, home1]);
  await mongoose.disconnect();
  console.log('Homes added');
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
    tgLogin: [lorem.generateWords(1),lorem.generateWords(1),lorem.generateWords(1)],
    homes: ArrIdHomes,
  })

  await testUser.save()
  await mongoose.disconnect();
  console.log('DB disconnected');
}

// seedHome()
seedUser()

// seed(PinSettings, [testSetting, testSetting1, testSetting2])
