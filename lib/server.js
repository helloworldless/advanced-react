import express from 'express';
import config from './config.js';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {init: 0});
});

app.listen(config.port, function listenhandler() {
  console.info(`Running on port ${config.port}`);
});
