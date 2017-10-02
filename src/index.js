import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Components/View/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Layout />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
