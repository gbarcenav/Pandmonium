import React, { Component } from "react";

class InputSpiner extends Component {
  render() {
    return (
      <input
        type="number"
        name="quantity"
        min="1"
        max="20"
        className="input-spiner"
      ></input>
    );
  }
}

export default InputSpiner;
