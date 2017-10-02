import React, {Component} from 'react';
import Home from '../../../Routes/Home/Home';
import About from '../../../Routes/About/About';
import {Route, Switch} from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
    </main>
)

export default Main
