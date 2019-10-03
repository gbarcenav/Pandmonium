import React, { Component } from "react";

class BtnGreen extends Component {
  
  onClick = e =>{
    e.preventDefault();
      localStorage.setItem('name', JSON.stringify(this.props.name));
      localStorage.setItem('num', JSON.stringify(this.props.num));
    }

  render() {
    return (
      
      <button 
      type="button" 
      className={this.props.className}
      onClick={this.onClick}>
        {this.props.btntext}
      </button>

    );
  }
}

export default BtnGreen;