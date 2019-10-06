import React, { Component } from "react";
import InputIncreaseDecrease from "./increase_decrease";

import DataMenu from "../menu.json";
// import * as firebase from 'firebase'
import * as firebase from 'firebase'



class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueType: '',
      valueoption: '',
      
    };
  }

  
  handleClick = (e) =>{
    e.preventDefault()
    if (e.target.name === 'select-type') {
      this.setState({
        valueType: e.target.value
      })
      
    }else if (e.target.name === 'select-option') {
      this.setState({
        valueoption: e.target.value
        
        
      });
      console.log(this.state.valueoption);
      
    } 
    const currentDate = new Date();
    const db = firebase.firestore();
    const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
    const strHour=`${currentDate.getHours()}-${currentDate.getMinutes()} hrs`

    db.collection('pedidos').add({
  pedidos:"Pandemonium",
  date: strDate,
  dateHour: strHour,
  name:localStorage.getItem('name'),
  num:localStorage.getItem('num'),
  option:this.state.valueoption,
  orden:localStorage.getItem('order'),
  table:localStorage.getItem('num-mesa')
  
  
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
  
})
.catch((error) => {
  console.error("Error adding document: ", error);
}
)
    
  }
  // componentDidMount(){
  //   const currentDate = new Date();
  //       const db = firebase.firestore();
  //       const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
  //       const strHour=`${currentDate.getHours()}-${currentDate.getMinutes()} hrs`
    
  //       db.collection('pedidos').add({
  //     pedidos:"Pandemonium",
  //     date: strDate,
  //     dateHour: strHour,
  //     name:localStorage.getItem('name'),
  //     num:localStorage.getItem('num'),
  //     option:this.state.valueoption,
  //     detalle:this.state.valueType,
  //     table:localStorage.getItem('num-mesa')
      
      
  //   })
  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
      
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   }
  //   )
  // }

  
  
  render() {
    let nuevo = DataMenu[this.props.indice].tipo;
    let detalle = DataMenu[this.props.indice].opcion;
    

    return (
      <table className="tag-menu-product">
        <thead>
          <tr>
            <th>Opciones</th>
            <th>Cantidad</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <select className="options-menu"  onClick={this.handleClick} name="select-type">
                {nuevo.map((x, index) => {
                  return (
                    <option key={index} value={x.name}>
                      {x.name}
                    </option>
                  );
                })}
              </select>
            </th>

            <td>
              <InputIncreaseDecrease ChangeQuantity={this.props.ChangeQuantity}/>
            </td>

            <th>
              <select className="options-menu" onClick={this.handleClick} name='select-option'>
                {detalle.map((x, index)=>{
                  return(
                    <option key={index} value={x} >{x}</option>
                  )
                }
                )}
                
              </select>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PizzaMenu;
