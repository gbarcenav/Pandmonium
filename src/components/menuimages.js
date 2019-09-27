import React, { Component } from "react";

class FoodBtn extends Component {
  render() {
    return (
      <button onClick={this.handleClick}>
        <img src={this.props.image} alt={this.props.alt}></img>
      </button>
    );
  }
}
//   const element = <Foodimages burger={burger} pizza={pizza} papatoes={papatoes}
//   hotdog={hotdog} cake={cake} salad ={salad} icecream={icecream} frape={frape} alt='menu'/>
// // // const element = <Input placeholder="Ingresa tu código" />;

export default FoodBtn;
