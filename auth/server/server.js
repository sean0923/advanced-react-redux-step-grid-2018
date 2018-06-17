const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// connecting to mongoDB
mongoose.connect('mongodb://localhost/step-grid-2018-auth');
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB');
});

// middleware
// app.use(morgan('combined')); // http req logging tool
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// routes
routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
});
