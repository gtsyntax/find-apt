const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Config file
const config = require('./config');

// Express initialization
const app = express();
// Database connection
mongoose.connect(config.database, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res, next) => {
  res.json("Hello World");
});


// Server boot
app.listen(config.port, (err) => {
  console.log(`App listening at port ${config.port}`);
})
