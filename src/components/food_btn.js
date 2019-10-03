import React, { Component } from "react";

class FoodBtn extends Component {
  onClick = () =>{
    this.props.getIndex(this.props.indice)
  }

  render() {
    
    return (
      <button className="btn-product" onClick={this.onClick}>
        <img
          src={this.props.image}
          alt={this.props.alt}
          className={this.props.styleCSS}  
        ></img>
      </button>
    );
  }
}

export default FoodBtn;
