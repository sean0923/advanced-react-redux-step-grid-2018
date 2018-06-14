module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send([1, 2, 3]);
  });

  app.get('*', (req, res) => {
    res.send('working?');
  });
};
