import React, { Component } from "react";

class BtnAdd extends Component {
  onClick = e => {
    e.preventDefault();
    localStorage.setItem("type", JSON.stringify(this.props.valueType));
    localStorage.setItem("option", JSON.stringify(this.props.valueOption));
    localStorage.setItem("quantity", JSON.stringify(this.props.quantity));
    localStorage.setItem("coment", JSON.stringify(this.props.coment));
  };

  render() {
    return (
      <button
        type="button"
        className={this.props.className}
        onClick={this.onClick}
      >
        {this.props.btntext}
      </button>
    );
  }
}

export default BtnAdd;
