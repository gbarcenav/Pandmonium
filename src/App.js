
import React, {Component} from 'react';
import './App.css';
import Login from "./components/pages/login";
import Places from "./components/pages/places";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component{
  
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/Places" component={Places} />
        {/* Aqui llamo a la pantalla de inicio: <Inicio/> */}
        {/* Aqui llamo a la pantalla de orden: <PantallaOrden /> */}
        </div>
      </Router>
    )
  }

}

export default App;
