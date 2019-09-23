import React, { Component } from "react";
import Menuimages from "../menuimages.js";
import Navbar from "../navbar";
import TagFood from "../tagfood";
import Foodbuy from "../foodbuy.js";
import Numbuy from "../numbuy.js";
import NumbuyWhite from "../numbuy-white.js";
import BtnGreen from "../btn_green.js";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Navbar />
        <section className="All-menu">
          <div className="menu-draws">
            <Menuimages />
          </div>
          <div className="text-menu">
            <p>INDIVIDUAL</p>
            <p>COMBO</p>
          </div>
          <div className="menu-buy">
            <div className="tag-ham">
              <TagFood />
            </div>
            <div>
              <NumbuyWhite />
            </div>
            <div>
              <Foodbuy />
            </div>
            <div>
              <Numbuy />
            </div>
            <div>
              <NumbuyWhite />
            </div>
            <div>
              <Foodbuy />
            </div>
            <div>
              <Numbuy />
            </div>
          </div>
          <div>
            <textarea className="comment" placeholder="Comentarios"></textarea>
          </div>
          <div>
            <BtnGreen btntext="ENVIAR" />
          </div>
        </section>
      </div>
    );
  }
}

export default Menu;
