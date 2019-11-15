import React from "react";
import axios from "axios";
import Nav from "./Nav";
import { getUserFromCookie } from "../users/index";

export default class Search extends React.Component {
	render() {
        let user = getUserFromCookie("name");
        console.log(this.props)
		return (
			<React.Fragment>
				<div className='container'>
					<br></br>
					<br></br>
					<br></br>
					<h1>Welcome 1 {user}</h1>
				</div>
			</React.Fragment>
		);
	}
}
