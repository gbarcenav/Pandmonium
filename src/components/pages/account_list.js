import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import GreenRectangle from "../green_rectangle";

class AccountList extends Component {
  render() {
    return (
      <div className="places-screen">
        <Navbar />
        <div className="open-account">
          <Link to="DetailPlace">
            <GreenRectangle classCSS="rectangle-account" place="MESA 2" />
          </Link>
          <GreenRectangle classCSS="rectangle-account" place="MESA 3" />
          <GreenRectangle classCSS="rectangle-account" place="BARRA 5" />
          <GreenRectangle classCSS="rectangle-account" place="MESA 1" />
        </div>
      </div>
    );
  }
}

export default AccountList;
