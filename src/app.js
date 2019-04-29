const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send([{ name: 'Ryan' }, { name: 'Runa' }]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Tokyo',
    forecast:
      'Sunny in the morning, expected to drop in temperature to 15 degrees.'
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
