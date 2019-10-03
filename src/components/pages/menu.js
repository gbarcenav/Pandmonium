import React, { Component } from "react";
import Navbar from "../navbar";
// import {Link} from "react-router-dom";
import { Redirect} from "react-router-dom";


import Burger from "../ux_resources/ICONOS MENU/ICONO_HAMBURGUESA_MENU.png";
import Pizza from "../ux_resources/ICONOS MENU/PIZZA_ICONO.png";
import Papatoes from "../ux_resources/ICONOS MENU/ICONOS_PAPAS.png";
import HotDog from "../ux_resources/ICONOS MENU/ICONO_HOT_DOG.png";
import Cake from "../ux_resources/ICONOS MENU/ICONO_CAKE.png";
import Salad from "../ux_resources/ICONOS MENU/ICONO_SALAD.png";
import IceCream from "../ux_resources/ICONOS MENU/ICON_ICECREAM.png";
import Frappe from "../ux_resources/ICONOS MENU/ICON_MILKSHAKE.png";

import BtnGreen from "../btn_green";
import PizzaMenu from "../product_selection/pizza";

import FoodBtn from "../menuimages";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Navbar />
        <hr></hr>

        <div className="menu-draws">
          <FoodBtn image={Burger} alt="Hamburguesas" />
          <FoodBtn image={Pizza} alt="Pizzas" />
          <FoodBtn image={Papatoes} alt="Papas" />
          <FoodBtn image={HotDog} alt="Hot Dogs" styleCSS="btn-hd" />
          <FoodBtn image={Cake} alt="Pan" />
          <FoodBtn image={Salad} alt="Ensaladas" />
          <FoodBtn image={IceCream} alt="Postres" />
          <FoodBtn image={Frappe} alt="Bebidas" />
        </div>

        <form className="menu-buy" onSubmit={this.onSubmit}>
          <div>
            <PizzaMenu />
          </div>
          <textarea className="comments" placeholder="Comentarios"></textarea>
          <br></br>

          {/* <Link to='./order_summary'>
          <BtnGreen btntext="ENVIAR" onClick={this.onClick}/>
          </Link> */}

          {/* <Link to='./resume'>
          <BtnGreen btntext="ENVIAR" type="submit"/>
          </Link> */}

          <button type="button" className="btn-green" onClick={this.onClick}>
          ENVIAR
        </button>
        {this.state.valid ? <Redirect to="/resume" /> : ""}

        </form>
      </div>
    );
  }
}

export default Menu;
