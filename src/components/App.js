import React from "react";
import { Router as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import {PrivateRoute,LoggedInRoute} from "./Routes"

export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Route path='/' exact component={Login} />
                <PrivateRoute path='/home' component={Home} />
            </React.Fragment>
        )
    }
}