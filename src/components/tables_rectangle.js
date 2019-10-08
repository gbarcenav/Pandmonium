import React, { Component } from "react";
import DetailPlace from "../components/pages/detail_place"


class TablesRectangle extends Component {
  onClick = (e) =>{
    console.log(e.target.name)
    
    return <DetailPlace value={e.target.name}/>;
  }

  render() {
    return(
      <div>
      {this.props.table.map((mesa,index)=>{
      return (
        <button 
        name={mesa}
        key={index} 
        className={this.props.classCSS} 
        type="button"
        onClick={this.onClick()}>
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