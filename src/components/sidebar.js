import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/Menu">
        Menú
        <br />
        <br />
        <hr></hr>
      </Link>
      <Link className="menu-item" to="/Places">
        Abrir Orden
        <br />
        <br />
        <hr></hr>
      </Link>
      <Link className="menu-item" to="/AccountList">
        Cuentas Abiertas
        <br />
        <br />
        <hr></hr>
      </Link> 
      <Link>
      Ventas del día
        <br />
        <br />
        <hr></hr>
      </Link>
      <Link className="menu-item" to="/">
        Cerrar sesión
        <br />
        <br />
        <hr></hr>
      </Link>
      
      
    </Menu>
  );
};
