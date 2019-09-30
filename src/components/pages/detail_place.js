import React, { Component } from "react";

import Navbar from "../navbar";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";
import FormNameNumber from "../number_name_form";

// import NameQuantity from "../../";

class DetailPlace extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     NameQuantity
  //   };
  // }

  // handleAddDinerQuantity() {
  //   this.state({
  //     NameQuantity: [...this.state.NameQuantity.nq]
  //   });
  // }

  render() {
    // const NameQuantity = this.state.NameQuantity.map((nq, i) => {
    //   return (
    //     <div>
    //       <span className="label-detail">No. Personas </span>
    //       <span className="data-detail">{this.state.diner}</span>
    //       <br></br>
    //       <span className="label-detail">Nombre </span>
    //       <span className="data-detail">{this.state.quantity}</span>
    //     </div>
    //   );
    // });
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle classCSS="rectangle-tabar-detail" />

        <div className="people-number-detail">
          <FormNameNumber onAddDinerQuantity={this.handleAddDinerQuantity} />
        </div>
        <div className="table-detail-container">
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
          <AccountPerGuest />
        </div>
      </div>
    );
  }
}

export default DetailPlace;
