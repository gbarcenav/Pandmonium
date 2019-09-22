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
          <AddRow
            conceptText="MALICIA"
            costQuantity="$65.00"
            commentText="Sin verdura"
          />
          <AddRow conceptText="DELIRIUM" costQuantity="$50.00" commentText="" />
        </tbody>
      </table>
    );
  }
}

export default TableDetail;
