import React from "react";
import axios from "axios";
import { setUserInCookie, checkIsAuthenticated } from "../users/index";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			cookie_added: false
		};
	}

	//getting userInput
	getUserName = e => {
		// storing in state
		let user = e.target.value;
		this.setState({
			userName: user
		});
	};

	//getting data from API
	getUserFromApi = () => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				console.log(response);
				//removing the white spaces using trim
				let checkUserName = response.data.find(user => {
					return this.state.userName.trim() === user.username;
				});
				console.log(checkUserName);
				//checking whether the respective user is found in list of users which got through API or not .
				if (checkUserName === undefined) {
					this.setState({
						userName: ""
					});
					alert("Sorry no user found !");
				} else {
					setUserInCookie("userName", checkUserName.username);
					// this.props.history.push("/home")
					setUserInCookie("name", checkUserName.name);
					;
				}
			})
			.catch(error => {
				alert(error);
			});
	};

	login = () => {
		//checking userName field is empty or not and then calling the API

		if (this.state.userName !== "") {
			//calling the API function
			this.getUserFromApi();
			console.log(this.state.cookie_added)
			// if(this.state.cookie_added ===  true){
			// 	this.props.history.push("/home")
			// }
		} else {
			alert("Sorry Username should not be empty!");
		}
	};

	render() {
		// console.log(this.props.history)
		console.log(this.state.userName);
		return (
			<React.Fragment>
				<div className='container py-5'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='row'>
								<div className='col-md-6 mx-auto'>
									<div className='card rounded-5'>
										<div className='card-header'>
											<h3 className='mb-0'>Login</h3>
										</div>
										<div className='card-body'>
											<form className='form'>
												<div className='form-group'>
													<label for='uname1'>Username</label>
													<input
														type='text'
														className='form-control form-control-lg rounded-5'
														name='uname1'
														id='uname1'
														value={this.state.userName}
														onChange={this.getUserName}
													/>
												</div>
												<div className='container text-center'>
													{" "}
													<Link to={"/home"}>
														<button
															type='button'
															className='btn btn-primary btn-lg '
															id='btnLogin'
															onClick={()=>{this.login()}}
														>
															Login
														</button>{" "}
													</Link>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
