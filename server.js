const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // for logging
const items = require('./routes/api/items');

const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// DB config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log('Connected to Mongo DB...'))
  .catch(err => console.log(err));

// end point
const api = require('./routes');
app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if(err) {
    console.log("error");
  } else {
    console.log(`Server listening on port ${port}`);
  }
});

