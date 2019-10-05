import React, { Component } from "react";
import Navbar from "../navbar";
// import { Link } from "react-router-dom";

import Burger from "../ux_resources/ICONOS MENU/ICONO_HAMBURGUESA_MENU.png";
import Pizza from "../ux_resources/ICONOS MENU/PIZZA_ICONO.png";
import Papatoes from "../ux_resources/ICONOS MENU/ICONOS_PAPAS.png";
import HotDog from "../ux_resources/ICONOS MENU/ICONO_HOT_DOG.png";
import Cake from "../ux_resources/ICONOS MENU/ICONO_CAKE.png";
import Salad from "../ux_resources/ICONOS MENU/ICONO_SALAD.png";
import IceCream from "../ux_resources/ICONOS MENU/ICON_ICECREAM.png";
import Frappe from "../ux_resources/ICONOS MENU/ICON_MILKSHAKE.png";
import Delete from "../ux_resources/delete.png";

import BtnGreen from "../btn_green";
import PizzaMenu from "../pizza_menu";
import FoodBtn from "../food_btn";
import DataMenu from "../../menu.json";
import ItemList from "../item-list";
import BtnAdd from "../btn_add";




class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice: 0,
      numburger:''
    };
  }

  getIndex = i => {
    this.setState({ indice: i });
  };


  render() {
    return (
      <div className="menu">
        <Navbar />
        <hr></hr>

        <div className="menu-draws">
          <FoodBtn
            image={Burger}
            alt="Hamburguesas"
            getIndex={this.getIndex}
            indice={DataMenu[0].id}
          />
          <FoodBtn
            image={Pizza}
            alt="Pizzas"
            getIndex={this.getIndex}
            indice={DataMenu[1].id}
          />
          <FoodBtn
            image={Papatoes}
            alt="Papas"
            getIndex={this.getIndex}
            indice={DataMenu[2].id}
          />
          <FoodBtn
            image={HotDog}
            alt="Hot Dogs"
            styleCSS="btn-hd"
            getIndex={this.getIndex}
            indice={DataMenu[3].id}
          />
          <FoodBtn
            image={Cake}
            alt="Pan"
            getIndex={this.getIndex}
            indice={DataMenu[4].id}
          />
          <FoodBtn
            image={Salad}
            alt="Ensaladas"
            getIndex={this.getIndex}
            indice={DataMenu[5].id}
          />
          <FoodBtn
            image={IceCream}
            alt="Postres"
            getIndex={this.getIndex}
            indice={DataMenu[6].id}
            //
          />
          <FoodBtn image={Frappe} 
          alt="Bebidas" 
          getIndex={this.getIndex}
          indice={DataMenu[7].id}
           />
        </div>
        <div className="menu-w-summary">
          <form className="menu-buy">
            <PizzaMenu indice={this.state.indice} />
            <textarea className="comments" placeholder="Comentarios"></textarea>
            <BtnAdd className="btn-green btn-green-add" btntext="AÑADIR" />
          </form>
          <div>
            <table className="table_products">
              <tbody>
              <tr>
                <th>Producto/s</th>
                <th>Eliminar</th>
              </tr>
              <tr>
                <ItemList itemName="MALICIA" />
                {/* itemName cambia según el nombre del producto que se añada */}
                <td>
                  <button>
                    <img src={Delete} alt="Eliminar"></img>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
            <div>
              <p>
                {/* Aquí se añaden los comenatrios en caso de que se ingrese algo */}
              </p>
            </div>
          </div>

          <BtnGreen
            btntext="ENVIAR A COCINA"
            onClick={this.onClick}
            // ruta={"/Summary"}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
