import React, { Component } from "react";
import Delete from "../components/ux_resources/delete.png";
import * as firebase from 'firebase'

class ItemList extends Component {
  deleteOrden = () => {};
  componentDidMount=() =>{}
  valueOrder = (a,b,c) => {
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
      table:localStorage.getItem('num-mesa'),
      type:a,
      option:b,
      quantity:c
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
    return (
      <div>
        <table className="table_products">
          <tbody>
            <tr>
              <th>Concepto</th>
              <th>Detalle</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>

            {this.props.itemName.map((producto, i) => {
              return (
                <tr key={i} valueOrder = {this.valueOrder(producto.type, producto.option, producto.quantity)}>
                  <td>{producto.type}</td>
                  <td>{producto.option}</td>
                  <td>x {producto.quantity}</td>
                  <td>
                    <button onClick={this.deleteOrden}>
                      <img src={Delete} alt="Eliminar"></img>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemList;