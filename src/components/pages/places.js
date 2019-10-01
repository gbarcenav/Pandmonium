import React, { Component } from "react";
import Navbar from "../navbar";
import GreenRectangle from "../green_rectangle";
import FormNameNumber from "../number_name_form";
import TableBar from "../tables";

class Places extends Component {
  constructor() {
    super();
    this.state = {
      number: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddOrder = this.handleAddOrder.bind(this);
  }

  changeTitle = (title, background) => {
    if (background === null) {
      this.setState({
        number: title
      });
    } else {
      this.setState({
        number: null
      });
    }
  };

  handleInput(e) {
    const { place, number } = e.target;
    this.setState({
      [number]: place
    });
  }

  handleAddOrder(order) {
    this.setState({
      dataOrder: [...this.state.dataOrder, order]
    });
  }

  render() {
    return (
      <div className="places-screen">
        <Navbar />
        <hr></hr>
        <div className="tables-bars">
          <div className="bar">
            <TableBar
              number="1"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="2"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="3"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
          </div>

          <div className="tables">
            <TableBar
              number="MESA 1"
              CSSclass="table-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="MESA 2"
              CSSclass="table-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="MESA 3"
              CSSclass="table-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
          </div>

          <div className="bar">
            <TableBar
              number="4"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="5"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="6"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="7"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="8"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
          </div>

          <div className="tables">
            <TableBar
              number="MESA 4"
              CSSclass="table-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
            <TableBar
              number="MESA 5"
              CSSclass="table-btn"
              changeTitle={this.changeTitle.bind(this)}
            />
          </div>
        </div>
        <GreenRectangle
          classCSS="rectangle-tabar-selection"
          place={this.state.number}
          onChange={this.handleInput}
          onAddOrder={this.handleAddOrder}
        />
        <FormNameNumber
          classCSS="people-name-number"
          onAddOrder={this.handleAddOrder}
        />
      </div>
    );
  }
}
export default Places;
