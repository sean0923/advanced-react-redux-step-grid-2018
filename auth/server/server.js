const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

// middleware
app.use(morgan); // http req logging tool
app.use(bodyParser.json({ type: '*/*' }));

// routes
routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
});
