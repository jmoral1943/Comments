import React from 'react';
import uuid from 'uuid';
import InnerComment from './InnerComment';
import InnerCommentBox from './InnerCommentBox';

class Comment extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    commented: false,
    commentCompleted: false,
    comments: []
  }

  handlelikes = () => {
    let newLikes = this.state.likes + 1;
    this.setState({
      likes: newLikes
    })
  }

  handledislikes = () => {
    let newLikes = this.state.dislikes + 1;
    this.setState({
      dislikes: newLikes
    })
  }

  handleCommentedOn = () => {
    let userN = document.querySelector("input[name='innerUserName']").value;
    let comm = document.querySelector("input[name='innerComment']").value;
    
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
      commentCompleted: true,
      comments: commentsArray
    })

    this.handleCommentExpands();

    document.querySelector("input[name='innerUserName']").value = '';
    document.querySelector("input[name='innerComment']").value = '';

  }

  handleDeleteComment = (id) => {
    let newComments = this.state.comments.filter((comment) => comment.id !== id);
    this.setState({
      comments: newComments
    })
  }

  handleCommentExpands = async() => {
    let newStatus = this.state.commented;
    newStatus = !newStatus

    await this.setState({
      commented: newStatus
    })

    // if (this.state.commented) {
    //   document.querySelector(".InnerCommentBox").style.opacity = 1;
    // } else {
    //   document.querySelector(".InnerCommentBox").style.opacity = 0;
    // }
  }

  render() {
    return(
      <div>
        <div className="Comment">
          <div className="Comment__content">
            <h2 className="Comment__userName">{this.props.userName}</h2>
            <p className="Comment__text">{this.props.comment}</p>
          </div>
          
          <section className="Comment__buttons">
            <div>
              {this.state.likes}
              <button className="Comment__thumbs-up" type="button" onClick={this.handlelikes}>
                <i className="far fa-thumbs-up"></i>
              </button>
              {this.state.dislikes}
              <button className="Comment__thumbs" type="button" onClick={this.handledislikes}>
                <i className="far fa-thumbs-down"></i>
              </button>
            </div>

            <button  className="Comment__deleteButton" type="button" onClick={() => this.props.delete(this.props.id)}>Delete</button>
          </section>
        </div>
        <div>
          <button className="Comment__addComments" type="button" onClick={this.handleCommentExpands}>Add comment</button>
          {this.state.commented ?
            <InnerCommentBox 
              post={this.handleCommentedOn}
            />
          : null
          }
  
          {this.state.commentCompleted ?
            this.state.comments.map((comment)=> {
              return (
                <InnerComment
                  key={comment.id}
                  userName={comment.userName}
                  comment={comment.comment}
                  delete={this.handleDeleteComment}
                  id={comment.id}
                  />
              );
            })
            : null
          }

        </div>
      </div>

    );
  }
  
}

export default Comment;