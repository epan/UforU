import React from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

import CommentsBanner from './CommentsBanner.jsx';
import CommentsChat from './CommentsChat.jsx';

class CommentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <h1>This is the comments page</h1>
    );
  }
}

export default CommentsPage;
