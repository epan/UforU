import React from 'react';
import axios from 'axios';
import CommentsList from './CommentsList.jsx';
import CommentInput from './CommentInput.jsx';
import io from 'socket.io-client';

class CommentsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    this.getComments(this.props.collegeId);

    const client = io.connect('http://127.0.0.1:3000');
    client.on('connect', () => {
      client.emit('room', this.props.collegeId);
    });

    client.on('roomResponse', (response) => {
      console.log(response);
    });
  }

  getComments(universityId) {
    axios.get('/api/comments', {
      params: {
        universityId: universityId
      }
    }).then(response => {
      this.setState({
        comments: response.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  postComment(comment) {
    // TODO: Emit socket.io event with comment and send comment to server
  }

  render () {
    return (
      <div>
        <p>This is the comments chat</p>
        <CommentsList comments={this.state.comments} />
        <CommentInput collegeId={this.props.collegeId} postComment={this.postComment}/>
      </div>
    );
  }
}

export default CommentsBody;
