import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './Dashboard';
//import App from './App';
import WebsiteIndex from './Website/index';
//import UserIndex from './Dashboard/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WebsiteIndex />, document.getElementById('root'));
//ReactDOM.render(<UserIndex />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
