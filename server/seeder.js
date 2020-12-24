require('dotenv').config()
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const mongoose = require('mongoose');
const User = require('./models/user')
const Home = require('./models/home')
const PinSetting = require('./models/pinSetting')
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
  name: "Кондиционер",
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input',
})

const testSetting1 = new PinSetting({
  name: 'Окно зал',
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input',
})

const testSetting2 = new PinSetting({
  name: 'Окно кухня',
  pinNum: Math.floor(Math.random() * 40),
  pinType: 'input',
})

async function seedHome() {
  const dbArrPinSettings = await PinSetting.find()
  const ArIdrPinSettings = dbArrPinSettings.map(el => el._id)
  const home = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
    pinSettingsId: [ArIdrPinSettings[0], ArIdrPinSettings[2]]
  })

  const home1 = new Home({
    name: lorem.generateWords(1),
    location: lorem.generateWords(2) + Math.floor(Math.random() * 10),
    pinSettingsId: [ArIdrPinSettings[0], ArIdrPinSettings[1]]

  })

  await Home.insertMany([home, home1]);
  console.log('Homes added');
}

async function seed(model, arr) {
  await model.insertMany(arr);
  console.log('Pins added');
  await mongoose.disconnect();
  console.log('DB disconnected');
}

async function seedUser() {
  const dbArrHomes = await Home.find()
  const ArrIdHomes = dbArrHomes.map(el => el._id)


  const testUser = new User({
    name: lorem.generateWords(1),
    password: sha256('123'),
    email: lorem.generateWords(1),
    tgLogin: [lorem.generateWords(1), lorem.generateWords(1), lorem.generateWords(1)],
    homes: ArrIdHomes,
  })

  await testUser.save()
  await mongoose.disconnect();
  console.log('Users added');
  console.log('DB disconnected');
}

// async function seedAll(){
//   await seed(PinSetting, [testSetting, testSetting1, testSetting2])
//   await seedHome()
//   await seedUser()
// }
// seedAll()
seed(PinSetting, [testSetting, testSetting1, testSetting2])
