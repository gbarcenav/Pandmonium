//Se importa React
import React from "react";
// Se importa archivo de estilos
import "./App.css";

import Login from "./components/pages/login";
import Places from "./components/pages/places";

function App() {
  return (
    <div className="App">
      <Login />
      <Places />
    </div>
  );
}

export default App;
