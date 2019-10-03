import React, { Component } from "react";
import "./index.css";
import "./App.css";
// import Login from "./components/pages/login";
import Places from "./components/pages/places";
import AccountList from "./components/pages/account_list";
import Menu from "./components/pages/menu";
import Summary from "./components/pages/summary";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/Places" component={Places} />
          <Route path="/Menu" component={Menu} />
          <Route path="/AccountList" component={AccountList} />
          <Route path="/Summary" component={Summary} />
        </Switch>
      </Router>
    );
  }
}

export default App;
