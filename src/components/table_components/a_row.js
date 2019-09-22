import React, { Component } from "react";

import Division from "../ux_resources/division.png";
import Delete from "../ux_resources/delete.png";
import Edit from "../ux_resources/writing.png";

class AddRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.conceptText}
          <span className="options_detail">
            <button>
              <img src={Division} alt="dividir"></img>
            </button>
            <button>
              <img src={Delete} alt="eliminar"></img>
            </button>
            <button>
              <img src={Edit} alt="editar"></img>
            </button>
          </span>
        </td>
        <td className="cost">{this.props.costQuantity}</td>
        <td className="comment">{this.props.commentText}</td>
      </tr>
    );
  }
}

export default AddRow;
