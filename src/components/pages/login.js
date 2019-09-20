import React, { Component } from "react";
import logo from "../ux_resources/Logo2017-02.png";
import Input from "../input";
import BtnGreen from "../btn_green";

class Login extends Component {
  render() {
    return (
      <div className="login-screen">
        <div className="rectangles">
          <div className="black-rectangle">
            <div className="green-rectangle"></div>
          </div>
        </div>

        <div className="backg-img">
          <img src={logo} className="logo-app" alt="logo" />

          <h1 className="greeting-login">¡HOLA!</h1>
          <form className="input-btn-form">
            <Input placeholder="INGRESA TU CÓDIGO" classCSS="input-login" />
            <br></br>
            <BtnGreen btntext="ENTRAR" to="/places" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
