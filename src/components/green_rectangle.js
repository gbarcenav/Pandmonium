 
import React, { Component } from "react";

class GreenRectangle extends Component {
  render() {
    return (
      <button className={this.props.classCSS} type="button">
        {this.props.nametable}-{this.props.name}
      </button>
    );
  }
}

export default GreenRectangle;