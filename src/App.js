import React from "react";
import  './App.css';
import Inicio from './components/inicio';
import PantallaOrden from './components/orden';
import Input from './components/input'
import Bars from "./components/bars";
import Tables from "./components/tables";
import PlaceSelection from "./components/Placeselectionbar";


function App(){
    return (
      <div className="App">
      <Inicio/>
      <Input />
      <PantallaOrden />

      <div className="rectangles">
        <div className="black-rectangle">
          <div className="green-rectangle"></div>
        </div>
      </div>

      <div className="tables-bars">
        <div className="bar">
          <Bars number="1" />
          <Bars number="2" />
          <Bars number="3" />
        </div>

        <div className="tables">
          <Tables number="MESA 1" />
          <Tables number="MESA 2" />
          <Tables number="MESA 3" />
        </div>

        <div className="bar">
          <Bars number="4" />
          <Bars number="5" />
          <Bars number="6" />
          <Bars number="7" />
          <Bars number="8" />
        </div>

        <div className='tables'>
          <Tables number="MESA 4" />
          <Tables number="MESA 5" />
        </div>
      </div>

      <div className="rectangle-tabar-selection">
        {/* Debería de cambiar texto según la selección */}
        <PlaceSelection place="MESA 2" />
      </div>
    </div>
    )
  }

export default App;
