import React, { Component } from "react";

import AddRow from "./table_components/a_row";

class TableDetail extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Detalle</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <AddRow
            conceptText="Malicia"
            quantity="x 1"
            size="Combo"
            costQuantity="$65"
            name="a"
            value="65"
          />
          <AddRow
            conceptText="Mango"
            quantity="x 1"
            size="-"
            costQuantity="$45"
            name="b"
            value="45"
          />
        </tbody>
      </table>
    );
  }
}

export default TableDetail;
