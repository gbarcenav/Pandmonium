// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Pedido from 'pedidos/pedido.js';
import elementimage from './pedidos/img/hamburguesa'
// import element from './placeholder';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(elementimage, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
