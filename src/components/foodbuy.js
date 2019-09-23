import React, { Component } from "react";
import Input from './input.js'

class Foodbuy extends Component {
    render() {
      return (
        <div className="input-foodbuy">
          <Input  classCSS="input-buy" typeInput="number" />
          <Input classCSS="input-buy" typeInput="number" />
          <Input classCSS="input-buy" typeInput="number" />
          <Input classCSS="input-buy" typeInput="number" />
          <Input classCSS="input-buy" typeInput="number" />
          <Input classCSS="input-buy" typeInput="number" />
          
        </div>
      )
    }
}

export default Foodbuy;