import React, { Component } from "react";

class AddRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.conceptText}</td>
        <td>{this.props.size}</td>
        <td>{this.props.quantity}</td>
        <td className="cost" value={this.props.value} name={this.props.name}>
          {this.props.costQuantity}
        </td>
      </tr>
    );
  }
}

export default AddRow;
