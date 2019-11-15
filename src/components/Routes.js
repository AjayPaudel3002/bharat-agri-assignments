import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkIsAuthenticated } from "../users/index";

export const PrivateRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

export const LoggedInRoute = ({ component: Component, ...rest }) => {
	var auth = checkIsAuthenticated();
	return (
		<Route
			{...rest}
			render={props =>
				auth.isAuthenticated === false ? <Component {...props} /> : <Redirect to='/home' />
			}
		/>
	);
};