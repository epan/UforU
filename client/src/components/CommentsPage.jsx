import React from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

import CommentsBanner from './CommentsBanner.jsx';
import CommentsChat from './CommentsChat.jsx';

class CommentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      university: {}
    };
  }

  componentDidMount() {
    this.getBanner(1);
  }

  getComments(universityId) {
    axios.get('/api/comments', {
      params: {
        universityId: universityId
      }
    }).then((response) => {
      // Some code to manage the response, now that I'm typing this I realize that I need to hold on this until I understand our socket stuff more.
    }).catch((err) => {
      console.log(err);
    });
  }

  getBanner(universityId) {
    axios.get('/api/college', {
      params: {
        universityId: universityId
      }
    }).then((response) => {
      console.log('THIS IS THE COMMENTS RESPONSE', response);
      this.setState({
        university: response.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <CommentsBanner college={this.state.university}/>
        <CommentsChat />
      </div>
    );
  }
}

export default CommentsPage;
