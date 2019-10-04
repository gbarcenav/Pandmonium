import React, { Component } from "react";
class ItemList extends Component {
  render() {
    return <td>{this.props.itemName}</td>;
  }
}

export default ItemList;
