import React, { Component } from "react";

class InputIncreaseDecrease extends Component {

  state = {
    counter: 0
  }

  Increase = () => {
    if(this.state.counter >= 0){
      this.setState({counter:this.state.counter + 1 })
    }
  }

  Decrease = () => {
    if(this.state.counter > 0){
      this.setState({counter:this.state.counter - 1 })
    }
  }

  render() {
    return (
      <div className="form-inc-dec">
        <button 
        type="button" 
        className="btn-inc-dec"
        onClick={this.Decrease}>          -
        </button>
        <input type="number" className="pizza-input"></input>
        <button type="button" className="btn-inc-dec increase">
          +
        </button>
      </div>
    );
  }
}

export default InputIncreaseDecrease;
