import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import * as firebase from 'firebase'


class BtnGreen extends Component {
  
 
  onClick = e =>{
            
          
    e.preventDefault();
    const {history} = this.props
      localStorage.setItem('name', JSON.stringify(this.props.name));
      localStorage.setItem('num', JSON.stringify(this.props.num));
      history.push(this.props.ruta);
      
  //       const currentDate = new Date();
  //       const db = firebase.firestore();
  //       const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
  //       const strHour=`${currentDate.getHours()}-${currentDate.getMinutes()} hrs`
    
  //       db.collection('pedidos').add({
  //     pedidos:"Pandemonium",
  //     date: strDate,
  //     dateHour: strHour,
  //     name:localStorage.getItem('name'),
  //     num:localStorage.getItem('num')
      
  //   })
  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
      
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   }
  //   )
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
