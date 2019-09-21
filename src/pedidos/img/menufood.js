
import React, { Component } from "react";
import burger from './dibujos/ICONO_HAMBURGUESA_MENU.png';
import pizza from './dibujos/PIZZA_ICONO.png';
import papatoes from './dibujos/ICONO_OTROS_PAPAS.png';
import hotdog from './dibujos/HOT_DOG_MENU.png';
import cake from './dibujos/ICONO_POSTREMENU.png';
import salad from './dibujos/ICONO_ENSALADA_MENU.png';
import icecream from './dibujos/ICONO_POSTRE_MENU.png';
import frape from './dibujos/ICONO_MALTEADA_MENU.png'


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
// const element = <Input placeholder="Ingresa tu código" />;
const element = <Foodimages burger={burger} pizza={pizza} papatoes={papatoes} 
hotdog={hotdog} cake={cake} salad ={salad} icecream={icecream} frape={frape} alt='menu'/>


export default element ;

  