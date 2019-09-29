import React, { Component } from "react";
import Input from "../components/input";
import InputSpiner from "../components/input-spiner";
import BtnGreen from "../components/btn_green";

class FormNameNumber extends Component {
  state = {
    name: ""
  };

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <form className={this.props.classCSS}>
        <label>No. Personas</label>
        <InputSpiner />
        <br></br>
        <label>Nombre del cliente</label>
        <Input
          classCSS="input-name"
          typeInput="text"
          onChange={this.onChange}
        />
        <BtnGreen btntext="ABRIR MESA" name={this.state.name} />
      </form>
    );
  }
}

export default FormNameNumber;
