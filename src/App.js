import React from 'react';
import './App.css';
import Inicio from './components/inicio';
import PantallaOrden from './components/orden';

class App extends React.Component{
  
  render(){
    return (
      <div className="App">
      Aqui llamo a la pantalla de inicio: <Inicio/>
      Aqui llamo a la pantalla de orden: <PantallaOrden />
      </div>
    )
  }
}

export default App;
