import React, { Component } from "react";

class AddRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.conceptText}</td>
        <td className="cost">{this.props.costQuantity}</td>
        <td className="comment">{this.props.commentText}</td>
      </tr>
    );
  }
}

export default AddRow;
