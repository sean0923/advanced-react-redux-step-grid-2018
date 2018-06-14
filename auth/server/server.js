const express = require('express');

const app = express();

const PORT = 5000;

app.get('*', (req, res) => {
  res.send('working?')
});

app.listen(PORT, () => {
  console.log(`app is listening to ${PORT}`);
});
