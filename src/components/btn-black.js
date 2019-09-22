import React, { Component } from "react";


class BtnBlack extends Component {
  render() {
    return (
      <button type="button" className="btn-black">
        {this.props.btntext}
      </button>
    );
  }
}

export default BtnBlack;