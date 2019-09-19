import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    < Router basename = { window.location.pathname || '' } >
    <Switch >
        <Route exact path = "/" render = { props => < Login/>}></Route>
        <Route exact path = "/Home" render = { props => < Home/>}></Route >

    </Switch>  
</Router>, 
<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
