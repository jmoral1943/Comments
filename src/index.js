import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import CommentBox from './components/CommentBox';
import Comment from './components/Comment';

class Comments extends React.Component {

  state = {
    comment: true,
    comments: [{
      userName: "Majid",
      comment: "Somethingg"
    }]
  }

  handlePostComment = () => {
    let userN = document.querySelector("input[name='userName']").value;
    let comm = document.querySelector("input[name='comment']").value;

    let commentsArray = this.state.comments
    commentsArray.push({
      userName: userN,
      comment: comm
    })
    this.setState({
      comments: commentsArray
    })

    document.querySelector("input[name='userName']").value = '';
    document.querySelector("input[name='comment']").value = '';

  }

  handleDeleteComment = () => {

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
