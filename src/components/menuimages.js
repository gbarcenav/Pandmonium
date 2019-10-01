import React, { Component } from "react";

class FoodBtn extends Component {
  render() {
    return (
      <button onClick={this.handleClick} className="btn-product">
        <img
          src={this.props.image}
          alt={this.props.alt}
          className={this.props.styleCSS}
        ></img>
      </button>
    );
  }
}

export default FoodBtn;
