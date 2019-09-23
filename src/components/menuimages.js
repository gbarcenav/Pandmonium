
import React, { Component } from "react";
import burger from './ux_resources/ICONOS MENU/ICONO_HAMBURGUESA_MENU.png';
import pizza from './ux_resources/ICONOS MENU/PIZZA_ICONO.png';
import papatoes from './ux_resources/ICONOS MENU/ICONOS_PAPAS.png';
import hotdog from './ux_resources/ICONOS MENU/ICONO_HOT_DOG.png';
import cake from './ux_resources/ICONOS MENU/ICONO_CAKE.png';
import salad from './ux_resources/ICONOS MENU/ICONO_SALAD.png';
import icecream from './ux_resources/ICONOS MENU/ICON_ICECREAM.png';
import frape from './ux_resources/ICONOS MENU/ICON_MILKSHAKE.png';


class Foodimages extends Component {
  render() {
    return(
      
        <div className="imagenes-menu">
        <img src={burger}
        alt="burger" className="food"/>
        <img src={pizza}
        alt="pizza" className="food"/>
        <img src={papatoes}
        alt="papatoes" className="food"/>
        <img src={hotdog}
        alt="hotdog" className="food"/>
        <img src={cake}
        alt="cake" className="food"/>
        <img src={salad}
        alt="salad" className="food"/>
        <img src={icecream}
        alt="icecream" className="food"/>
        <img src={frape}
        alt="frape" className="food"/>
        </div>
      
      ) 
    }
  }
//   const element = <Foodimages burger={burger} pizza={pizza} papatoes={papatoes} 
//   hotdog={hotdog} cake={cake} salad ={salad} icecream={icecream} frape={frape} alt='menu'/>
// // // const element = <Input placeholder="Ingresa tu código" />;


export default Foodimages ;

  