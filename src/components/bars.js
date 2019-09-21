import React, { Component } from "react";


class Bars extends Component {
  state = {
    background: null
  }
  
  changeColor = () =>{
    if(this.state.background == null){
      this.setState({
        background: '#39bf4d'
      })
    }
    else{
      this.setState({
        background: null
      })
    }
      
      
  }
  
  render() {
    return (
    <button className="bars-btn"
    onClick={this.changeColor} 
    style={{backgroundColor: this.state.background}}
    >{this.props.number}</button>
    )
}
}



export default Bars;
