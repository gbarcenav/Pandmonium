import React, { Component } from "react";
import Menuimages from '../menuimages.js';
import Navbar from '../navbar';
import TagFood from '../tagfood'
import Foodbuy from '../foodbuy.js'
import Numbuy from '../numbuy.js'
import NumbuyWhite from '../numbuy-white.js'



class Menu extends Component {
    render() {
      return (
          <section className="menu">
          <Navbar />
          <div className="All-menu">
              <div className="menu-draws">
              <Menuimages/>
              </div>
              <div className="menu-buy">

              <div className="tag-ham">
              <TagFood/>

              </div>
              <div>
              <NumbuyWhite/>
              </div>
              <div>
              <Foodbuy/>
              </div>
              <div>
                  <Numbuy/>
              </div>
              <div>
              <NumbuyWhite/>
              </div>
              <div>
                  <Foodbuy/>
              </div>
              <div>
                  <Numbuy/>
              </div>
              </div>

          </div>

          </section>


      )
    }
    }

    export default Menu;
