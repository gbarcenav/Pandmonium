import React, { Component } from "react";
import InputIncreaseDecrease from "./increase_decrease";

import DataMenu from "../menu.json";
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAMeCCFhYbZ47QYMUZAeTR-D7aKvvBqL44",
  authDomain: "burgerqueen-pandmonium.firebaseapp.com",
  databaseURL: "https://burgerqueen-pandmonium.firebaseio.com",
  projectId: "burgerqueen-pandmonium",
  storageBucket: "burgerqueen-pandmonium.appspot.com",
  messagingSenderId: "46946006669",
  appId: "1:46946006669:web:dd61f494242ed57c4c14c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const strDate = currentDate.getFullYear()-currentDate.getMonth()+1-currentDate.getDate();
// db.collection('pedidos').add({
//   pedidos:"Pandemonium",
//   date: strDate
  
  
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
  
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// }
// )


class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueType: '',
      valueoption: ''
    };
  }
  
  handleChange = (e) =>{
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
    
  }
  
  render() {
    let nuevo = DataMenu[this.props.indice].tipo;
    let detalle = DataMenu[this.props.indice].opcion;
    const nameRef = firebase.database().ref().child('object').child('pedido')
    nameRef.on('value', snapshot => {
    this.setState({
      name: snapshot.val()
    })
  })

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
              <select className="options-menu" onChange={this.handleChange} name="select-type">
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
              <InputIncreaseDecrease />
            </td>

            <th>
              <select className="options-menu" onChange={this.handleChange} name='select-option'>
                {detalle.map((x, index)=>{
                  return(
                    <option key={index} value={x}>{x}</option>
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
