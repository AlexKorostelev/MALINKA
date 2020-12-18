require('dotenv').config()
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const mongoose = require('mongoose');
const User = require('./models/user')
const Home = require('./models/home')
const PinSettings = require('./models/pinSettings')
const UserTg = require('./models/userTg')

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

// const testUser = new User({
//   name: 'testName',
//   password: '123',
//   email: 'testMail@mail.com',
//   homes: 
// })

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


async function seed(model, arr) {

  await model.insertMany(arr);

  await mongoose.disconnect();
  console.log('DB disconnected');
}

seed(PinSettings, [testSetting, testSetting1, testSetting2])
