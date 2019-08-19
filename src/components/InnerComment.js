import React from 'react';

class InnerComment extends React.Component {
  state = {
    likes: 0,
    dislikes: 0
  }

  handleLikes = () => {
    let newLikes = this.state.likes + 1;
    this.setState({
      likes: newLikes
    })
  }

  handleDislikes = () => {
    let newDislikes = this.state.dislikes + 1;
    this.setState({
      dislikes: newDislikes
    })
  }

  render() {
    return(
      <div className="InnerComment">
        <div className="Comment__content">
          <h3>{this.props.userName}</h3>
          <p>{this.props.comment}</p>
        </div>
        
        <section className="Comment__buttons">
            <div>
              {this.state.likes}
              <button className="Comment__thumbs-up" type="button" onClick={this.handleLikes}>
                <i className="far fa-thumbs-up"></i>
              </button>
              {this.state.dislikes}
              <button className="Comment__thumbs" type="button" onClick={this.handleDislikes}>
                <i className="far fa-thumbs-down"></i>
              </button>
            </div>

            <button  className="Comment__deleteButton" type="button" onClick={() => this.props.delete(this.props.id)}>Delete</button>
          </section>
      </div>
    );
  }
  
}

export default InnerComment;