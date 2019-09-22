import React, { Component } from "react";
import Input from "../components/input";
import BtnGreen from "../components/btn_green";

class FormTotal extends Component {
  render() {
    return (
      <form className={this.props.classCSS}>
        <label>TOTAL $</label>
        <Input classCSS="total-input" typeInput="number" />
        <BtnGreen btntext="PAGAR" />
      </form>
    );
  }
}

export default FormTotal;
