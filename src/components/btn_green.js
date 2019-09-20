import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

class BtnGreen extends Component {
  render() {
    return (
      <button type="button" className="btn-green">
        {this.props.btntext}
        <Link to={this.props.to} />
      </button>
    );
  }
}

export default BtnGreen;
