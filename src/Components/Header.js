import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../Routes/Home/Home';
import About from '../Routes/About/About';
// import './Header.css';

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </nav>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

export default Header;
