import React, { Component } from "react";

import Bars from "../components/bars";
import Tables from "../components/tables";

class PlacesContainer extends Component {
  render() {
    return (
      <div className="tables-bars">
        <div className="bar">
          <Bars number="1" />
          <Bars number="2" />
          <Bars number="3" />
        </div>

        <div className="tables">
          <Tables number="MESA 1" />
          <Tables number="MESA 2" />
          <Tables number="MESA 3" />
        </div>

        <div className="bar">
          <Bars number="4" />
          <Bars number="5" />
          <Bars number="6" />
          <Bars number="7" />
          <Bars number="8" />
        </div>

        <div className="tables">
          <Tables number="MESA 4" />
          <Tables number="MESA 5" />
        </div>
      </div>
    );
  }
}

export default PlacesContainer;
