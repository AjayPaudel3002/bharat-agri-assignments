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
		let is_logged_in = checkIsAuthenticated("UserName");
		console.log(is_logged_in);
		return (
			<div className='container'>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
					<a className='navbar-brand pl-5' href='/'>
						<i className='fas fa-film' />
						<span> Movie Database</span>
					</a>
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
						<ul className='navbar-nav ml-auto'>
							<form className='form-inline mt-8 mt-md-0 text-center'>
								<input
									className='form-control mr-sm-2 ml-5'
									type='text'
									placeholder='Search movies'
									aria-label='Search'
									onChange={e => this.setState({ searchInput: e.target.value })}
									value={this.state.searchInput}
									list='encodings'
								/>

								<datalist id='encodings'>{this.getDataOptions()}</datalist>
								<button
									className='btn my-sm-0 btn-secondary'
									type='button'
									onClick={() => {
										this.props.getMovies(this.state.searchInput.trim());
									}}
								>
									<span> Search</span>
								</button>
							</form>
						</ul>
						<span class='navbar-text'>
							{is_logged_in.isAuthenticated ? (
								<ul className='navbar-nav ml-5'>
									<Link to={`/`}>
										<li
											className='nav-item mr-3'
											onClick={() => {
												clearUser("userName");
												clearUser("name");
											}}
										>
											<i className='fas fa-sign-out-alt' />
											<span> Log Out</span>
										</li>
									</Link>
								</ul>
							) : null}
						</span>
					</div>
				</nav>{" "}
				​ ​ ​
			</div>
		);
	}
}
export default Nav;
