require('dotenv').config()
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors')
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use('/', indexRouter)


const PORT = process.env.PORT ?? 3002
// connect
app.listen(PORT, () => console.log('server started on port', PORT))
