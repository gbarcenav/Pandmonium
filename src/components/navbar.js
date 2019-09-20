import React, { Component } from "react";
import Logo from "../components/ux_resources/Logo2017-02.png";
import SideBar from "./sidebar";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div id="Navbar">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
        <img src={Logo} className="logo-nav" alt="logotipo Pandemonium"></img>
      </nav>
    );
  }
}

export default Navbar;
