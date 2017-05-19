const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const router = require('./router/router');

const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function () {
  console.log('listening on', PORT);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

// attach socket.io to server and port
const io = require('socket.io')(server);

// listeners for socket.io events
io.on('connection', function(client) {
  client.on('event', function(data) {
    console.log('io connected with', data);
  });
  client.on('disconnect', function() {
    console.log('io disconnected');
  });
});
