import React, { Component } from "react";
import Navbar from "../navbar";
import {Link} from "react-router-dom";

import Burger from "../ux_resources/ICONOS MENU/ICONO_HAMBURGUESA_MENU.png";
import Pizza from "../ux_resources/ICONOS MENU/PIZZA_ICONO.png";
import Papatoes from "../ux_resources/ICONOS MENU/ICONOS_PAPAS.png";
import HotDog from "../ux_resources/ICONOS MENU/ICONO_HOT_DOG.png";
import Cake from "../ux_resources/ICONOS MENU/ICONO_CAKE.png";
import Salad from "../ux_resources/ICONOS MENU/ICONO_SALAD.png";
import IceCream from "../ux_resources/ICONOS MENU/ICON_ICECREAM.png";
import Frappe from "../ux_resources/ICONOS MENU/ICON_MILKSHAKE.png";

import BtnGreen from "../btn_green";
import PizzaMenu from "../pizza_menu"
import FoodBtn from "../food_btn";
import DataMenu from "../menu.json";

class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      indice:0
    }}
  
    getIndex = (i)=>{
      this.setState({indice: i})
    }
    

  render() {
    return (
      <div className="menu">
        <Navbar />
        <hr></hr>

        <div className="menu-draws">
          <FoodBtn image={Burger} 
                    alt="Hamburguesas" 
                    getIndex ={this.getIndex}
                    indice= {DataMenu[0].id}
                    />
          <FoodBtn image={Pizza} alt="Pizzas"
                    getIndex ={this.getIndex}
                    indice= {DataMenu[1].id}
                    />
          <FoodBtn image={Papatoes} alt="Papas" 
                    getIndex ={this.getIndex}
                    indice= {DataMenu[2].id}/>
          <FoodBtn image={HotDog} alt="Hot Dogs" styleCSS="btn-hd"
                    getIndex ={this.getIndex}
                    indice= {DataMenu[3].id} />
          <FoodBtn image={Cake} alt="Pan" 
                    getIndex ={this.getIndex}
                    indice= {DataMenu[4].id}/>
          <FoodBtn image={Salad} alt="Ensaladas" 
                    getIndex ={this.getIndex}
                    indice= {DataMenu[5].id}
                    />
          <FoodBtn image={IceCream} alt="Postres" 
                    getIndex ={this.getIndex}
                    //
                    />
          <FoodBtn image={Frappe} alt="Bebidas"
                    getIndex ={this.getIndex}
                    
                     />
        </div>

        <form className="menu-buy">
          <div>
            <PizzaMenu indice={this.state.indice}/>
          </div>
          <textarea className="comments" placeholder="Comentarios"></textarea>
          <br></br>
          <Link to='/OrderSummary'>
          <BtnGreen btntext="ENVIAR" onClick={this.onClick}/>
          </Link>
        </form>
      </div>
    );
  }
}

export default Menu;
