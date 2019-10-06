import React, { Component } from "react";

import Navbar from "../navbar";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";

class DetailPlace extends Component {
  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle
          classCSS="rectangle-tabar-detail"
          place="MESA 2"
        ></GreenRectangle>

        <div className="people-number-detail">
          <span className="label-detail">No. Personas </span>
          <span className="data-detail">
            1{/* Aquí tiene que cambiar el número */}
          </span>
          <br></br>
          <span className="label-detail">Nombre </span>
          <span className="data-detail">
            Tania{/* Aquí tiene que cambiar el nombre */}
          </span>
        </div>
        <div className="table-detail-container">
          <AccountPerGuest />
        </div>
      </div>
    );
  }
}

export default DetailPlace;
