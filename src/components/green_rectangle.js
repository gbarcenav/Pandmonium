import React, { Component } from "react";

class GreenRectangle extends Component {
  render() {
    return (
      <button className={this.props.classCSS} type="button">
        {this.props.place}
      </button>
    );
  }
}

export default GreenRectangle;
