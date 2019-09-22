import React, { Component } from "react";
// import PlaceSelection from "../placeselectionbar";

import Navbar from "../navbar";
import PlacesContainer from "../places_container";
import GreenRectangle from "../green_rectangle";
import FormNameNumber from "../number_name_form";
import BtnGreen from "../btn_green";
import { Link } from "react-router-dom";


class Places extends Component {
  state = {
    number: null
  }

  changeTitle = (title,background) =>{
    if(background == null){
      this.setState({
        number: title
      }) 
    }else{
      this.setState({
        number: null
      }) 
      }
    }   

  render() {
    return (
      <div className="places-screen">
        <Navbar />

        <PlacesContainer />

        <GreenRectangle place={this.state.number}  />

        <FormNameNumber classCSS="people-name-number" />
        <Link to='/Menu'>
        <BtnGreen btntext="ABRIR MESA" />
        </Link>
      </div>
    );
  }
}

export default Places;
