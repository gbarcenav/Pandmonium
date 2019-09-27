import React, { Component } from "react";
import MenuImages from '../menuimages.js';
import Navbar from '../navbar';
import TagFood from '../tagfood';
import Foodbuy from '../foodbuy.js';
import Numbuy from '../numbuy.js';
import NumbuyWhite from '../numbuy-white.js';
import BtnGreen from '../btn_green.js';
import { Link } from "react-router-dom";


class Menu extends Component {
    render() {
      return (
        <section className="menu">
          <Navbar />
          <div className="All-menu">
              <div className="menu-draws">
              <MenuImages/>
              </div>
              <div className="text-menu"><p>INDIVIDUAL</p><p>COMBO</p></div>
              <div className="menu-buy">
                <div className="tag-ham"><TagFood/></div>
                <div><NumbuyWhite/></div>
                <div><Foodbuy/></div>
                <div><Numbuy/></div>
                <div><NumbuyWhite/></div>
                <div><Foodbuy/></div>
                <div><Numbuy/></div>
              </div>
              <div><textarea className="comment" placeholder="Comentarios"></textarea></div>
              <div><Link to ='/DetailPlace'> <BtnGreen btntext="ENVIAR"/></Link></div>
          </div>


        </section>


      )
    }
    }

    export default Menu;
