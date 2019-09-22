import React, { Component } from "react";
import Menuimages from '../menuimages.js';
import Navbar from '../navbar';
import TagFood from '../tagfood'


class Menu extends Component {
    render() {
      return (
          <section className="menu">
          <Navbar />
          <div className="All-menu">
              <div className="menu-draws">
              <Menuimages/>
              </div>
              <div className="tag-ham">
              <TagFood/>
              

              </div>

          </div>

          </section>


      )
    }
    }

    export default Menu;
