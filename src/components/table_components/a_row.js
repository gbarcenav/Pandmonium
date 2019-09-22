import React, { Component } from "react";

import ConceptProduct from "../table_components/concept";
import CostProduct from "../table_components/cost";
import CommentGuest from "../table_components/comment";

class AddRow extends Component {
  render() {
    return (
      <tr>
        <ConceptProduct conceptText="MALICIA" />
        <CostProduct costQuantity="$65.0" />
        <CommentGuest commentText="Sin verdura" />
      </tr>
    );
  }
}

export default AddRow;
