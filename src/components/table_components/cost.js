import React, { Component } from "react";

class CostProduct extends Component {
  render() {
    return <td className="cost">{this.props.costQuantity}</td>;
  }
}

export default CostProduct;
