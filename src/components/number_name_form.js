import React, { Component } from "react";

class FormNameNumber extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      quantity: "",
      diner: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    // console.log(e.target.value, e.target.name);
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.onAddDinerQuantity(this.state);
    console.log("Enviando...");
  }

  render() {
    return (
      <form className={this.props.classCSS} onSubmit={this.handleSubmit}>
        <label htmlFor="quantity">No. Personas</label>
        <input
          type="number"
          name="quantity"
          min="1"
          className="input-spiner"
          onChange={this.handleInput}
        ></input>
        <br></br>
        <label htmlFor="diner">Nombre del cliente</label>
        <input
          name="diner"
          className="input-name"
          type="text"
          onChange={this.handleInput}
        ></input>
        <button className="btn-green">ABRIR MESA</button>
      </form>
    );
  }
}

export default FormNameNumber;
