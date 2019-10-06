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

  
  componentDidMount = () =>{
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
              <select
                className="options-menu"
                onChange={this.props.ChangeValueSelect}
                name="select-type"
              >
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
              <InputIncreaseDecrease
                ChangeQuantity={this.props.ChangeQuantity}
              />
            </td>

            <th>
              <select
                className="options-menu"
                onChange={this.props.ChangeValueSelect}
                name="select-option"
              >
                {detalle.map((x, index) => {
                  return (
                    <option key={index} value={x}>
                      {x}
                    </option>
                  );
                })}
              </select>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PizzaMenu;
