import React, {Component} from 'react';
import './App.css';
import Inicio from './components/inicio';
import PantallaOrden from './components/orden';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
