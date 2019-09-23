import React, { Component } from "react";

import RectanglesLogin from "../rectangles_login";
import logo from "../ux_resources/Logo2017-02.png";
import CodeForm from "../code_form";

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
        <RectanglesLogin />
        <div className="backg-img">
          <img src={logo} className="logo-app" alt="logo" />

          <h1 className="greeting-login">¡HOLA!</h1>

          <CodeForm />
        </div>
      </div>
    );
  }
}

export default Login;
