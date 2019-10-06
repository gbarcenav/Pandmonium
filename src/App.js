import React, { Component } from "react";
import "./index.css";
import "./App.css";
import Login from "./components/pages/login";
import Places from "./components/pages/places";
import AccountList from "./components/pages/account_list";
// import OrderSummary from "./components/pages/order_summary";
import Menu from "./components/pages/menu";
import Summary from "./components/pages/summary";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPlace from "./components/pages/detail_place";

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Places" component={Places} />
          <Route path="/Menu" component={Menu} />
          <Route path="/AccountList" component={AccountList} />
          <Route path="/Summary" component={Summary} />
          <Route path="/DetailPlace" component={DetailPlace}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
