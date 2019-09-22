import React, { Component } from "react";

import Division from "../ux_resources/division.png";
import Delete from "../ux_resources/delete.png";
import Edit from "../ux_resources/writing.png";

class ConceptProduct extends Component {
  render() {
    return (
      <td>
        {this.props.conceptText}{" "}
        <span className="options_detail">
          <button>
            <img src={Division} alt="dividir"></img>
          </button>{" "}
          <button>
            <img src={Delete} alt="eliminar"></img>
          </button>{" "}
          <button>
            <img src={Edit} alt="editar"></img>
          </button>
        </span>
      </td>
    );
  }
}

export default ConceptProduct;
