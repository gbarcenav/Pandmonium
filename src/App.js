import React, { Component } from "react";
import "./index.css";
import "./App.css";
// import Login from "./components/pages/login";
import Places from "./components/pages/places";
import DetailPlace from "./components/pages/detail_place";
import AccountList from "./components/pages/account_list";
import OrderSummary from "./components/pages/order_summary";
import Menu from "./components/pages/menu";
import BillDetails from "./components/pages/bill_details";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/" component={Places} />
          <Route path="/Places" component={Places} />
          <Route path="/Menu" component={Menu} />
          <Route path="/DetailPlace" component={DetailPlace} />
          <Route path="/AccountList" component={AccountList} />
          <Route path="/OrderSummary" component={OrderSummary}/>
          <Route path="/BillDetails" component={BillDetails}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
