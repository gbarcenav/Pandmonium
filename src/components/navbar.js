import React, { Component } from "react";
import Menu from "../components/ux_resources/menu-button.png";
import Logo from "../components/ux_resources/Logo2017-02.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={Menu} className="menu-ham" alt="menú"></img>
        <img src={Logo} className="logo-nav" alt="logotipo"></img>
      </nav>
    );
  }
}

export default Navbar;
