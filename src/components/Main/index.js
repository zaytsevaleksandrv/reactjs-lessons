import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Roster from '../Roster'
import Home from '../Home'

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/roster' component={Roster}/>
            </Switch>
        );
    }
}

