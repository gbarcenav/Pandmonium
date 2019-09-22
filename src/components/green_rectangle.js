import React, { Component } from "react";
import PlaceSelection from "../components/Placeselectionbar";

class GreenRectangle extends Component {
  render() {
    return (
      <div className={this.props.classCSS}>
        {/* Debería de cambiar texto según la selección */}
        <PlaceSelection place="MESA 2" />
      </div>
    );
  }
}

export default GreenRectangle;
