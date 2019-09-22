import React, { Component } from "react";

import AddRow from "./table_components/a_row";

class TableDetail extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>CONCEPTO</th>
            <th>PRECIO</th>
            <th>COMENTARIOS</th>
          </tr>
        </thead>
        <tbody>
          <AddRow />
        </tbody>
      </table>
    );
  }
}

export default TableDetail;
