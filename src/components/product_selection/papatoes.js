import React, { Component } from "react";

import NumbuyWhite from "../numbuy-white";
import Foodbuy from "../foodbuy";
import Numbuy from "../numbuy";

class PapatoesMenu extends Component {
  render() {
    return (
      <div className="tag-ham">
        <div className="text-menu">
          <h2 className="indiv">INDIVIDUAL</h2>
          <h2>COMBO</h2>
        </div>

        <div className="tag-food">
          <p>MALICIA</p>
        </div>
        <div className="tag-food">
          <p>SOBERBIA</p>
        </div>
        <div className="tag-food">
          <p>GULA</p>
        </div>
        <div className="tag-food">
          <p>ALMA EN PENA</p>
        </div>
        <div className="tag-food">
          <p>ENCARNACIÓN</p>
        </div>
        <div className="tag-food">
          <p>BANANA LIMBO</p>
        </div>

        <NumbuyWhite />

        <Foodbuy />

        <Numbuy />

        <NumbuyWhite />

        <Foodbuy />

        <Numbuy />
      </div>
    );
  }
}

export default PapatoesMenu;
