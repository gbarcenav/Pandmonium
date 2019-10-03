import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class BtnGreen extends Component {
  
  onClick = e =>{
    e.preventDefault();
    const {history} = this.props
      localStorage.setItem('name', JSON.stringify(this.props.name));
      localStorage.setItem('num', JSON.stringify(this.props.num));
      history.push('/Menu')
    }

  render() {
    return (
      
      <button 
      type="button" 
      className="btn-green"
      onClick={this.onClick}>
        {this.props.btntext}
      </button>

    );
  }
}

export default withRouter(BtnGreen);
