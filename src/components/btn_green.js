import React, { Component } from "react";

class BtnGreen extends Component {
  render() {
    return (
      <button type="button" className="btn-green">
        {this.props.btntext}
      </button>
    );
  }
}

export default BtnGreen;
