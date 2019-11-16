import React from "react";
import { Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Movie from "./Movie";
import { PrivateRoute, LoggedInRoute } from "./Routes";

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<LoggedInRoute path='/' exact component={Login} />
				<PrivateRoute path='/home' component={Home} />
				<PrivateRoute path='/movies' component={Movie} />
			</Switch>
		);
	}
}
