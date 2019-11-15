import React from "react";
import { Router as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { checkIsAuthenticated, clearUser, getUserFromCookie } from "../users/index";
import { accessSearchFromLocalStorage } from "../users/local-storage";

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};
	}
	getDataOptions = () => {
		let userName = getUserFromCookie("userName");
		let searchList = accessSearchFromLocalStorage(userName);
		if(searchList && searchList.length){
			return searchList.map(search => {
				return (
					<option value={search}>{search}</option>
				)
			})
		}
	}
	render() {
		let is_logged_in = checkIsAuthenticated("UserName");
		console.log(is_logged_in);
		return (
			<div>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
					<a className='navbar-brand pl-5' href='#'>
						MovieDatabase
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
							<form className='form-inline mt-2 mt-md-0 text-center'>
								<input
									className='form-control mr-sm-2 ml-3'
									type='text'
									placeholder='mobile brands'
									aria-label='Search'
									onChange={e => this.setState({ searchInput: e.target.value })}
									value={this.state.searchInput}
									list='encodings'
								/>
								<datalist id='encodings'>
									{this.getDataOptions()}
									{/* <option value='ISO-8859-1'>ISO-8859-1</option>
									<option value='cp1252'>ANSI</option>
									<option value='utf8'>UTF-8</option> */}
								</datalist>
							</form>
							<button
								className='btn my-sm-0'
								type='button'
								onClick={() => {
									this.props.getMovies(this.state.searchInput.trim());
								}}
							>
								Search
							</button>
							{is_logged_in.isAuthenticated ? (
								<li className='nav-item'>
									<Link to={`/`} className='mr-3'>
										<li
											className='nav-item mr-3'
											onClick={() => {
												clearUser("userName");
												clearUser("name");
												window.location.reload();
											}}
										>
											Log Out
										</li>
									</Link>
								</li>
							) : null}
						</ul>
					</div>
				</nav>
				​ ​ ​
			</div>
		);
	}
}
export default Nav;
