import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={menu} className="menu-ham"></img>
        <img src={logo} className="logo-nav"></img>
      </nav>
    );
  }
}

export default Navbar;
