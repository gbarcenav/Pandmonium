import React, { Component } from "react";

import Navbar from "../navbar";
import PlacesContainer from "../places_container";
import GreenRectangle from "../green_rectangle";
import FormNameNumber from "../number_name_form";
import BtnGreen from "../btn_green";

class Places extends Component {
  render() {
    return (
      <div className="places-screen">
        <Navbar />

        <PlacesContainer />

        <GreenRectangle classCSS="rectangle-tabar-selection" />

        <FormNameNumber classCSS="people-name-number" />

        <BtnGreen btntext="ABRIR MESA" />
      </div>
    );
  }
}

export default Places;
