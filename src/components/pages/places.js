import React, { Component } from "react";
import PlaceSelection from "../Placeselectionbar";
import Input from "../input";
import BtnGreen from "../btn_green";
import Bars from "../Bars";
import Tables from "../Tables";
import Navbar from "../navbar";

class Places extends Component {
  render() {
    return (
      <div className="places-screen">
        <Navbar />
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

        <div className="rectangle-tabar-selection">
          {/* Debería de cambiar texto según la selección */}
          <PlaceSelection place="MESA 2" />
        </div>
        <form className="people-name-number">
          <p>Personas</p>
          <Input classCSS="people-number" typeInput="number" />
          <br></br>
          <p>Nombre del cliente</p>
          <Input classCSS="input-name" typeInput="text" />
          <BtnGreen btntext="ABRIR MESA" />
        </form>
      </div>
    );
  }
}

export default Places;
