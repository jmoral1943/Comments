import React from 'react';

const InnerCommentBox = (props) => (
  <div className="InnerCommentBox">
    <input className="CommentBox__textInput--inner" placeholder="User Name" name="innerUserName"/>
      
    <input className="CommentBox__textInput--inner" placeholder="Comment" name="innerComment"/>
      
    <button className="CommentBox__button" type="button" onClick={props.post}>Post</button>
  </div>
);

export default InnerCommentBox;