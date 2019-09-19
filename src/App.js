import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SideBar from "./sidebar";

function App() {
    return (
        <div id="App">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    
          <div id="page-wrap">
          <span aria-label="emoji" role="img"> Cool Restaurant 🍔🍕</span>
            <h2>Check out our offerings in the sidebar!</h2>
          </div>
        </div>
      );
}

export default App;
