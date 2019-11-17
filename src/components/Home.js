import React from "react";
import axios from "axios";
import Nav from "./Nav";
import queryString from "query-string";
import { getUserFromCookie } from "../users/index";
import Welcome from "./Welcome";
import Search from "./Search";
import { setSearchForUserInLocalStorage } from "../users/local-storage";
import { Pagination } from "./Pagination";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			totalCounts: 0,
			search: {
				page: 1,
				s: "" //search parameter
			}
		};
	}

	//call api
	getSearchResults = search => {
		let updateSearch = queryString.parse(search);
		console.log(updateSearch);
		updateSearch.apikey = "550c4b1f";
		axios
			.get("http://www.omdbapi.com", {
				params: updateSearch
			})
			.then(response => {
				console.log(response);
				let totalResults = Number(response.data.totalResults);
				if (response.data.Response === "True") {
					this.setState({
						movies: response.data.Search,
						totalCounts: Math.ceil(totalResults / 10)
					});
				} else {
					alert(response.data.Error);
				}
			})
			.catch(error => {
				alert(error);
			});
	};

	componentDidMount() {
		let updateSearch = queryString.parse(this.props.location.search);
		console.log(updateSearch);
		if (updateSearch.s !== undefined) {
			updateSearch.apikey = "550c4b1f";
			this.getSearchResults(queryString.stringify(updateSearch));
			this.setState({
				search: queryString.parse(this.props.location.search)
			});
			console.log(updateSearch);
		} else {
			updateSearch.apikey = "550c4b1f";
			updateSearch.page = 1;
			updateSearch.s = "movie";
			this.getSearchResults(queryString.stringify(updateSearch));
			delete updateSearch.apikey;
			this.setState({
				search: updateSearch
			});
		}
	}

	//search movies
	getMovies = searchInput => {
		let updateSearch = this.state.search;
		let searchValue = this.state.search;
		console.log(searchValue);
		console.log(this.state.search);
		updateSearch.s = searchInput;
		updateSearch.page = 1;
		console.log(updateSearch);
		if (searchInput !== "") {
			let userName = getUserFromCookie("userName");
			setSearchForUserInLocalStorage(userName, searchInput);
			this.getSearchResults(queryString.stringify(updateSearch));
			console.log(updateSearch);
			this.setState(
				{
					search: updateSearch
				},
				() => {
					this.props.history.push(`?${queryString.stringify(searchValue)}`);
				}
			);
		}
	};
	//pagination
	changePage = page => {
		let updateSearch = this.state.search;
		console.log(page);
		updateSearch.page = page;
		this.setState(
			{
				search: updateSearch
			},
			() => {
				this.props.history.push(`?${queryString.stringify(updateSearch)}`);
			}
		);
		this.getSearchResults(queryString.stringify(updateSearch));
	};

	render() {
		console.log(this.state.search);
		let updateSearch = queryString.parse(this.props.location.search);
		console.log(updateSearch);
		return (
			<React.Fragment>
				<Nav getMovies={this.getMovies} {...this.props}></Nav>
				<br></br>
				<br></br>
				<br></br>
				{this.state.movies !== undefined && updateSearch.s !== undefined ? (
					<React.Fragment>
						<Search
							movies={this.state.movies}
							totalCounts={this.state.totalCounts}
							search={this.state.search}
							{...this.props}
						></Search>
						<br></br>
						<br></br>
						<Pagination
							movies={this.state.movies}
							totalCounts={this.state.totalCounts}
							search={this.state.search}
							changePage={this.changePage}
						></Pagination>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Welcome
							movies={this.state.movies}
							totalCounts={this.state.totalCounts}
							search={this.state.search}
							{...this.props}
						></Welcome>
						<Pagination
							movies={this.state.movies}
							totalCounts={this.state.totalCounts}
							search={this.state.search}
							changePage={this.changePage}
						></Pagination>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}
