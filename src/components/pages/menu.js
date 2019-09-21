import React, { Component } from "react";
import Menuimages from '../menuimages.js';
import Navbar from '../navbar';


class Menu extends Component {
    render() {
      return (
          <section className="menu">
          <Navbar />
          <div className="All-menu">
              <Menuimages/>

          </div>

          </section>


      )
    }
    }

    export default Menu;
