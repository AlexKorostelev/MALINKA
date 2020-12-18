require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userMiddeleware = require('./middelware/user');
const varMiddelware = require('./middelware/variables');

const app = express()

const indexRouter = require('./routes/index')
const url = process.env.MONGOOSE_CONNECT
mongoose.connect(process.env.MONGOOSE_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('DB connected');
});




app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(session({
  secret: 'fdlk',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.createConnection(process.env.MONGOOSE_CONNECT, {useNewUrlParser: true,  useUnifiedTopology: true,}),

    // collection: 'sessions',
    // url,
  })
}))


app.use(userMiddeleware);
app.use(varMiddelware);

// routes
app.use('/', indexRouter)
app.use('/auth', authRoutes)



const PORT = process.env.PORT ?? 3002
// connect
app.listen(PORT, () => console.log('server started on port', PORT))
