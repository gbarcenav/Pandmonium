import React, { Component } from "react";

class CommentGuest extends Component {
  render() {
    return <td className="comment">{this.props.commentText}</td>;
  }
}

export default CommentGuest;
