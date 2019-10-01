import React, { Component } from "react";
import InputIncreaseDecrease from "../increase_decrease";

import DataMenu from "../menu.json";

class PizzaMenu extends Component {
  render() {
    return (
      <table className="tag-menu-product">
        <thead>
          <tr>
            <th>Opciones</th>
            <th>Cantidad</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <select className="options-menu">
                {DataMenu.map((tipo, index) => {
                  return <option value={tipo.platillo}>{tipo.platillo}</option>;
                })}
              </select>
            </th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <th>
              <select className="options-menu">
                <option>Elige un tamaño</option>
              </select>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PizzaMenu;
