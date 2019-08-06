import React from 'react';

const CommentBox = (props) => {
  return (
    <div className="CommentBox">
      <input className="CommentBox__textInput" placeholder="User Name" name="userName"/>
      
      <input className="CommentBox__textInput" placeholder="Comment" name="comment"/>
      
      <button className="CommentBox__button" type="button" onClick={props.post}>Post</button>
    </div>
  );
}

export default CommentBox;