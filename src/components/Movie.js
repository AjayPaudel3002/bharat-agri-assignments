import React from "react";
import axios from "axios";
import queryString from "query-string";
import icons from "./Icons";
import { checkIsAuthenticated, clearUser} from "../users/index";

import { Link } from "react-router-dom";
export default class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: [],
			movieDisplayDetails: []
		};
	}

	componentDidMount() {
		let search = queryString.parse(this.props.location.search);
		if (search) {
			axios
				.get("http://www.omdbapi.com", {
					params: {
						t: search.title,
						apikey: "550c4b1f"
					}
				})
				.then(response => {
					console.log(response.data);
					if (response.data.Response === "True") {
						this.setState({
							movie: response.data
						});
						this.getIcons();
					} else {
						this.props.history.push("/home");
					}
				});
		}
	}

	getIcons = () => {
		//getting available icon's key
		let iconsName = icons.map(item => {
			return item.name;
		});
		//collecting the data which are not NA and which are available on the iconName
		let details = [];
		for (let i = 0; i < iconsName.length; i++) {
			console.log(iconsName[i]);
			let item = iconsName[i];
			if (this.state.movie[item] !== "N/A") {
				for (let j = 0; j < icons.length; j++) {
					if (icons[j].name === item) {
						console.log(icons[j][item]);
						details.push({ name: item, value: this.state.movie[item], icon: icons[j][item] });
					}
				}
			}
		}
		console.log(details);
		if (details) {
			this.setState({
				movieDisplayDetails: details
			});
		}
	};

	render() {
		console.log(this.props);
		let is_logged_in = checkIsAuthenticated("UserName");
		return (
			<React.Fragment>
				<nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
					<div
						className='navbar-brand pl-5'
						style={{ cursor: "pointer" }}
						onClick={() => this.props.history.push("/home")}
					>
						<span>
							<i className='fas fa-film' />
						</span>
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
						<ul className='navbar-nav mr-auto'>​</ul>
						<div className='input-group col-lg-3 col-sm-5 mt-2'>
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
					</div>
				</nav>{" "}
				<br></br>
				<br></br>
				<br></br>
				<div className='container '>
					<div
						className='card mb-3 '
						style={{
							boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"
						}}
					>
						{this.state.movie.Poster !== "N/A" ? (
							<img
								src={this.state.movie.Poster}
								className='card-img-top'
								alt='...'
								style={{ height: "650px" }}
							/>
						) : (
							<img
								src='/placeholder.png'
								className='card-img-top'
								alt='...'
								style={{ height: "650px" }}
							/>
						)}
					</div>
					<br></br>
					<br></br>
					<div className='container'>
						<div className='row'>
							{this.state.movieDisplayDetails.map((item, index) => {
								console.log(item);
								return (
									<div className='col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4' key ={"card" + index}>
										<i className={item.icon}></i>
										<h3>{item.name}</h3>
										<p>{item.value}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
