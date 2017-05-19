import React from 'react';
import axios from 'axios';
import CommentsList from './CommentsList.jsx';
import CommentInput from './CommentInput.jsx';

class CommentsBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.getComments(this.props.collegeId);
  }

  getComments(universityId) {
    axios.get('/api/comments', {
      params: {
        universityId: universityId
      }
    }).then(response => {
      // Some code to manage the response, now that I'm typing this I realize that I need to hold on this until I understand our socket stuff more.
      this.setState({
        comments: response.data
      });
      console.log(this.state.comments);
    }).catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <p>This is the comments chat</p>
        <CommentsList comments={this.state.comments} />
        <CommentInput />
      </div>
    );
  }
}

export default CommentsBody;
