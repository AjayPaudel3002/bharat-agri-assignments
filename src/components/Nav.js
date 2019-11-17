import React from "react";
import { Link } from "react-router-dom";
import { checkIsAuthenticated, clearUser, getUserFromCookie } from "../users/index";
import { accessSearchFromLocalStorage } from "../users/local-storage";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};
	}

	//to get the history of searchers of users
	getDataOptions = () => {
		let userName = getUserFromCookie("userName");
		let searchList = accessSearchFromLocalStorage(userName);
		if (searchList && searchList.length) {
			return searchList.map((search, index) => {
				return (
					<option key={"option" + index} value={search}>
						{search}
					</option>
				);
			});
		}
	};

	render() {
		console.log(this.props.history);
		let is_logged_in = checkIsAuthenticated("UserName");
		console.log(is_logged_in);
		return (
			<div className='container'>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
					<div className='navbar-brand pl-5' style={{ cursor: "pointer" }} onClick = {()=>this.props.history.push("/home")}>

						<span ><i className='fas fa-film'/></span>
						<span> Movie Database</span>
					</div>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarCollapse'
						aria-controls='navbarCollapse'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ' id='navbarCollapse'>
						<ul class='navbar-nav mr-auto'>​</ul>
						<div class='input-group col-lg-5 col-sm-5 col-md-6 mt-2'>
							<input
								className='form-control '
								type='text'
								placeholder='Search movies'
								aria-label='Search'
								onChange={e => this.setState({ searchInput: e.target.value })}
								value={this.state.searchInput}
								list='encodings'
							/>

							<datalist id='encodings'>{this.getDataOptions()}</datalist>
							<div class='input-group-append'>
								<div
									className='btn my-sm-0 btn-secondary'
									type='button'
									onClick={() => {
										this.props.getMovies(this.state.searchInput.trim());
									}}
								>
									<i class='fa fa-search'></i>
								</div>
							</div>
						</div>
						<div class='input-group col-lg-4 col-md-3 col-sm-5 mt-2'>
							{is_logged_in.isAuthenticated ? (
								<div
									className='input-group'
									style={{ cursor: "pointer" }}
									onClick={() => {
										clearUser("userName");
										clearUser("name");
									}}
								>
									<Link to={"/"}>
										<span>
											<i className='fas fa-sign-out-alt' style={{ color: "white" }} />
										</span>
										<span style={{ color: "white" }}> Log Out</span>
									</Link>
								</div>
							) : null}
						</div>
						{/* <div class='input-group col-lg-3 col-sm-5 mt-2'>
							<div class='input-group'>
								<button class='btn btn-secondary' type='button'>
									Login
								</button>
							</div>
						</div> */}
					</div>
				</nav>{" "}
				<br></br>
				<br></br> ​ ​ ​
			</div>
		);
	}
}
export default Nav;
