import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import io from 'socket.io-client';

import Home from './components/Home.jsx';
import Container from './components/Container.jsx';
import Results from './components/Results.jsx';
import Survey from './components/Survey.jsx';
import CommentsPage from './components/CommentsPage.jsx';

// TODO: Make sure connect works for prod
const socket = io.connect('http://127.0.0.1:3000');
socket.on('connect', function(data) {
  console.log('before emit and on');
  socket.emit('event', 'cash me ousside');
  socket.on('ok', function(msg) {
    console.log('sup2');
    console.log(msg);
  });
});

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='results' component={Results} />
          <Route path='college/:id' component={CommentsPage}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
