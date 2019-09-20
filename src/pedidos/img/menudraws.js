import React from 'react';


function Food(props) {
    return(
      <div className="imagenes-menu">
        <img src={props.burger}
        alt={props.alt} className="burger"/>
        <img src={props.pizza}
        alt={props.alt} className="burger"/>
        <img src={props.papatoes}
        alt={props.alt} className="burger"/>
        <img src={props.hotdog}
        alt={props.alt} className="burger"/>
        <img src={props.cake}
        alt={props.alt} className="burger"/>
        <img src={props.salad}
        alt={props.alt} className="burger"/>
        <img src={props.icecream}
        alt={props.alt} className="burger"/>
        <img src={props.frape}
        alt={props.alt} className="burger"/>
      </div>
    ) 
}
// const element = <Input placeholder="Ingresa tu código" />;
  

  export default Food;