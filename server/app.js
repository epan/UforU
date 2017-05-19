const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const router = require('./router/router.js');

const app = express();
const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

app.listen(PORT, function () {
  console.log('listening right now on port', PORT);
});
console.log('listening on', IP, PORT);

module.exports.app = app;
