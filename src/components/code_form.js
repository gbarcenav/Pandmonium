import React, { Component } from "react";

import Input from "../components/input";
import BtnGreen from "../components/btn_green";

import { Link } from "react-router-dom";

class CodeForm extends Component {
  render() {
    return (
      <form className="input-btn-form">
        <Input placeholder="INGRESA TU CÓDIGO" classCSS="input-login" />
        <br></br>
        <Link to="/Places">
          <BtnGreen btntext="ENTRAR" />
        </Link>
      </form>
    );
  }
}

export default CodeForm;
