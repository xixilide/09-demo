import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marked from './marked';
import './main.css';
import 'highlight.js/styles/github.css';

 ReactDOM.render(<Routers />, document.getElementById('app'));
// ReactDOM.render(<Marked />, document.getElementById('app'));
