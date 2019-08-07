import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import CommentBox from './components/CommentBox';
import Comment from './components/Comment';
import uuid from 'uuid';

class Comments extends React.Component {

  state = {
    comment: true,
    comments: [{
      id: 1,
      userName: "Majid",
      comment: "Somethingg"
    }]
  }

  handlePostComment = () => {
    let userN = document.querySelector("input[name='userName']").value;
    let comm = document.querySelector("input[name='comment']").value;


    if (userN === '' || comm === '') {
      alert("Fill out your userName and comment");
      return;
    }

    let commentsArray = this.state.comments
    commentsArray.push({
      id: uuid.v4(),
      userName: userN,
      comment: comm
    })
    this.setState({
      comments: commentsArray
    })

    document.querySelector("input[name='userName']").value = '';
    document.querySelector("input[name='comment']").value = '';

  }

  handleDeleteComment = (id) => {
    let newComments = this.state.comments.filter((comment) => comment.id !== id);
    this.setState({
      comments: newComments
    })
  }

  render() {
    return(
      <div>
        <h1>Comments</h1>

        { this.state.comment ?
          this.state.comments.map((comment) => {
            return (
              <Comment
                key={comment.comment}
                userName={comment.userName}
                comment={comment.comment}
                delete={this.handleDeleteComment}
                id={comment.id}
                />
            );
          })
          :null

        }
       
        <CommentBox post={this.handlePostComment}/>
      </div>
    );
  }
}

ReactDOM.render(<Comments />, document.getElementById('root'));
