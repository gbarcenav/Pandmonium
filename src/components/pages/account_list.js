import React, { Component } from "react";

import Navbar from "../navbar";
import GreenRectangle from "../green_rectangle";

class AccountList extends Component {
  render() {
    return (
      <div className="places-screen">
        <Navbar />
        <GreenRectangle classCSS="rectangle-account" place="MESA 2" />
        <GreenRectangle classCSS="rectangle-account" place="MESA 3" />
        <GreenRectangle classCSS="rectangle-account" place="BARRA 5" />
        <GreenRectangle classCSS="rectangle-account" place="MESA 1" />
      </div>
    );
  }
}

export default AccountList;
