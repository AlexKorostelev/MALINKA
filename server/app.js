require('dotenv').config()
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express()

const indexRouter = require('./routes/index')

mongoose.connect(process.env.MONGOOSE_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('DB connected');
});

const store = new MongoStore({
  collection: 'sessions',
  url: process.env.MONGOOSE_CONNECT,
})

app.use(session({
  secret: 'srtwyrwtywrtywrtyrtwy',
  resave: false,
  saveUninitialized: false,
  store,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use('/', indexRouter)
app.use('/auth', authRoutes)


const PORT = process.env.PORT ?? 3001
// connect
app.listen(PORT, () => console.log('server started on port', PORT))
