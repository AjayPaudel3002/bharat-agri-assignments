import React from "react";
import axios from "axios";
import Nav from "./Nav";
import queryString from "query-string";
import { getUserFromCookie } from "../users/index";
import Welcome from "./Welcome";
import Search from "./Search";

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

	getSearchResults = search => {
        let updateSearch = queryString.parse(search);
        console.log(search)
		updateSearch.apikey = "550c4b1f";
		axios
			.get("http://www.omdbapi.com", {
				params: updateSearch
			})
			.then(response => {
				console.log(response);
				if (response.data.Response === "True") {
					this.setState({
						movies: response.data.Search,
						totalCounts: response.data.totalResults
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
		console.log(updateSearch.s);
		if (updateSearch.s !== undefined) {
			updateSearch.apikey = "550c4b1f";
            this.getSearchResults(queryString.stringify(updateSearch));
            this.setState({
                search:updateSearch
            })
			console.log(updateSearch);
		}
	}

	getMovies = searchInput => {
        let updateSearch = this.state.search
        console.log(this.state.search)
        updateSearch.s = searchInput;
		console.log(updateSearch);
		if (searchInput !== " ") {
			this.getSearchResults(queryString.stringify(updateSearch));
			console.log(updateSearch);
			this.setState(
				{
					search: updateSearch
				},
				() => {
					this.props.history.push(`?${queryString.stringify(updateSearch)}`);
				}
			);
		}
	};

	render() {
		console.log(this.state.search);
		return (
			<React.Fragment>
				<Nav getMovies={this.getMovies}></Nav>
				{this.state.movies === undefined ? (
					<Welcome></Welcome>
				) : (
					<Search movies={this.state.movies} totalCounts={this.state.totalCounts}></Search>
				)}
			</React.Fragment>
		);
	}
}
