import React, { Component } from "react";


class BtnWhite extends Component {
  render() {
    return (
      <button type="button" className="btn-white">
        {this.props.btntext}
      </button>
    );
  }
}

export default BtnWhite;