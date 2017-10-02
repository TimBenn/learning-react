import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="App-logo" alt="logo"/>
                <nav>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
