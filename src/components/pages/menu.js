import React, { Component } from "react";
<<<<<<< HEAD
import Navbar from "../navbar";
=======
import MenuImages from '../menuimages.js';
import Navbar from '../navbar';
import TagFood from '../tagfood';
import Foodbuy from '../foodbuy.js';
import Numbuy from '../numbuy.js';
import NumbuyWhite from '../numbuy-white.js';
import BtnGreen from '../btn_green.js';
import { Link } from "react-router-dom";
>>>>>>> upstream/master

import FoodBtn from "../menuimages";

<<<<<<< HEAD
import Burger from "../ux_resources/ICONOS MENU/ICONO_HAMBURGUESA_MENU.png";
import Pizza from "../ux_resources/ICONOS MENU/PIZZA_ICONO.png";
import Papatoes from "../ux_resources/ICONOS MENU/ICONOS_PAPAS.png";
import HotDog from "../ux_resources/ICONOS MENU/ICONO_HOT_DOG.png";
import Cake from "../ux_resources/ICONOS MENU/ICONO_CAKE.png";
import Salad from "../ux_resources/ICONOS MENU/ICONO_SALAD.png";
import IceCream from "../ux_resources/ICONOS MENU/ICON_ICECREAM.png";
import Frappe from "../ux_resources/ICONOS MENU/ICON_MILKSHAKE.png";
=======
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
>>>>>>> upstream/master

import BtnGreen from "../btn_green";
import PizzaMenu from "../product_selection/pizza";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Navbar />

        <div className="menu-draws">
          <FoodBtn image={Burger} alt="Hamburguesas" />
          <FoodBtn image={Pizza} alt="Pizzas" />
          <FoodBtn image={Papatoes} alt="Papas" />
          <FoodBtn image={HotDog} alt="Hot Dogs" />
          <FoodBtn image={Cake} alt="Pan" />
          <FoodBtn image={Salad} alt="Ensaladas" />
          <FoodBtn image={IceCream} alt="Postres" />
          <FoodBtn image={Frappe} alt="Bebidas" />
        </div>

        <form className="menu-buy">
          <div>
             <PizzaMenu />
          </div>
          <textarea className="comments" placeholder="Comentarios"></textarea>
          <br></br>

          <BtnGreen btntext="ENVIAR" />
        </form>
      </div>
    );
  }
}

export default Menu;
