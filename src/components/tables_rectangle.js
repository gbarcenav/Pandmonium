import React, { Component } from "react";

class TablesRectangle extends Component {
  render() {
    return(
      <div>
      {this.props.table.map((mesa,index)=>{
      return (
      
        <button key={index} className={this.props.classCSS} type="button">
          {mesa}
        </button>
      );
    })
  }
  </div>
    );
  }
}


export default TablesRectangle;