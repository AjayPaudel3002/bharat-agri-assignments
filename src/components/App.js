import React from "react";
import { Router as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./Login"

export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Route path='/' exact component={Login} />
            </React.Fragment>
        )
    }
}