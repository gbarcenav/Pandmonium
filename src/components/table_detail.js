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
          </tr>
        </thead>
        <tbody>
          <AddRow conceptText="MALICIA" costQuantity="$65.00" />
        </tbody>
      </table>
    );
  }
}

export default TableDetail;
