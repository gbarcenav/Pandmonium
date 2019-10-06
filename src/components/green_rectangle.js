import React, { Component } from "react";

class GreenRectangle extends Component {
  render() {
    localStorage.setItem("num-mesa", JSON.stringify(this.props.place));
    return (
      <button className={this.props.classCSS} type="button">
        {this.props.place}
      </button>
    );
  }
}

export default GreenRectangle;
