import React, {Component} from 'react';
import Header from '../../Header/Header';
import Home from '../../../Routes/Home/Home';
import About from '../../../Routes/About/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../Main/Main'


class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default Layout;
