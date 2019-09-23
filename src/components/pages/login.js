import React, { Component } from "react";
import firebase from '../../Firebase';
import logo from "../ux_resources/Logo2017-02.png";
import Input from "../input";
import BtnGreen from "../btn_green";
import {Link} from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empleado: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('empleado').doc(this.state.noEmpleado);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          empleado: doc.data(),
          // key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('usuario').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div className="login-screen">
        <div className="rectangles">
          <div className="black-rectangle">
            <div className="green-rectangle"></div>
          </div>
        </div>

        <div className="backg-img">
          <img src={logo} className="logo-app" alt="logo" />

          <h1 className="greeting-login">¡HOLA!</h1>
          <form className="input-btn-form">
            <Input placeholder="INGRESA TU CÓDIGO" classCSS="input-login" />
            <br></br>
            <Link to="/Places">
              <BtnGreen btntext="ENTRAR" />
            </Link>
            
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
