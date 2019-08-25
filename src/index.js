import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Counter from './Redux/reducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
const reducer = combineReducers({
    Counter
}); */
//console.log(`Reducres are: ${reducer}`);
//const reducer = {};
//const myStore = createStore(reducer);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
