import React from "react";
import axios from "axios";
import Nav from "./Nav";
import { getUserFromCookie } from "../users/index";

export default class Welcome extends React.Component {
	render() {
		let user = getUserFromCookie("name");
		return (
			<React.Fragment>
				<div className='container'>
					<br></br>
					<br></br>
					<br></br>
					<h1>Welcome {user}</h1>
				</div>
			</React.Fragment>
		);
	}
}
