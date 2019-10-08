import React, { Component } from "react";

import Navbar from "../navbar";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";
import * as firebase from 'firebase';

class DetailPlace extends Component {
  onClick = (mesa) =>{    
    const db = firebase.firestore();   
     const pedidosRef = db.collection('pedidos');   
     pedidosRef.where('table', '==', mesa )   
     .get()    
    .then((onSnapshot) => {  
          const root = document.querySelector("#root");   
         let strPedido = ' '   
         onSnapshot.forEach((doc) => {    
            strPedido =`    
            <div>     
           <p>${doc.data().dateHour}</p>    
            <p>${doc.data().name}</p>
         <p>${doc.data().table}</p> 
             </div>`             
       })  
            root.innerHTML = strPedido;


    })
    
  }
  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle
          classCSS="rectangle-tabar-detail"
          place="MESA 2"
          onClick={this.onClick(localStorage.getItem('num-mesa'))}
        ></GreenRectangle>

        <div className="people-number-detail">
          <span className="label-detail">No. Personas </span>
          <span className="data-detail">
            1{/* Aquí tiene que cambiar el número */}
          </span>
          <br></br>
          <span className="label-detail">Nombre </span>
          <span className="data-detail">
            Tania{/* Aquí tiene que cambiar el nombre */}
          </span>
        </div>
        <div className="table-detail-container">
          <AccountPerGuest />
        </div>
      </div>
    );
  }
}

export default DetailPlace;
