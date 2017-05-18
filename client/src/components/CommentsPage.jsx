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

  getComments(universityId) {
    axios.get('/api/comments', {
      params: {
        universityID: universityId
      }
    }).then((response) => {
      // Some code to manage the response, now that I'm typing this I realize that I need to hold on this until I understand our socket stuff more.
    }).catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <CommentsBanner />
        <CommentsChat />
      </div>
    );
  }
}

export default CommentsPage;
