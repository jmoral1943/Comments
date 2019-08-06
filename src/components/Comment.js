import React from 'react';

class Comment extends React.Component {
  state = {
    likes: 0,
    dislikes: 0
  }

  render() {
    return(
      <div className="Comment">
        <div className="Comment__content">
          <h2 className="Comment__userName">{this.props.userName}</h2>
          <p className="Comment__text">{this.props.comment}</p>
        </div>
        
        <section className="Comment__buttons">
          <div>
            <button className="Comment__thumbs-up" type="button">
              <i className="far fa-thumbs-up"></i>
            </button>

            <button className="Comment__thumbs" type="button">
              <i className="far fa-thumbs-down"></i>
            </button>
          </div>

          <button  className="Comment__deleteButton" type="button">Delete</button>
        </section>
        
      </div>
    );
  }
  
}

export default Comment;