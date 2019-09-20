
import React, {Component} from 'react';
import './App.css';
import Login from "./components/pages/login";
import Places from "./components/pages/places";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component{
  
  render(){
    return (
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Places" component={Places} />
        {/* Aqui llamo a la pantalla de inicio: <Inicio/> */}
        {/* Aqui llamo a la pantalla de orden: <PantallaOrden /> */}
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    )
  }

}

export default App;
