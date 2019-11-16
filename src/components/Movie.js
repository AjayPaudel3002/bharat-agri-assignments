import React from "react";
import axios from "axios";
import queryString from "query-string";

export default class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: []
		};
	}

	componentDidMount() {
		let search = queryString.parse(this.props.location.search);
		axios
			.get("http://www.omdbapi.com", {
				params: {
					t: search.title,
					apikey: "550c4b1f"
				}
			})
			.then(response => {
				console.log(response.data);
				if (response.data) {
					this.setState(
						{
							movie: response.data
                        }
					);
				}
			});
	}

	render() {
        console.log(this.state.movie)
		return (
			<React.Fragment>
				{/* <div className='container '>
					<div
						className='card mb-3 '
						style={{
							boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"
						}}
					>
						<img src='./placeholder.png' className='card-img-top' alt='...' height='350px' />
						<div className='card-body '>
							<div className='float-left'>
								<h2 style={{ fontFamily: "Acme, seri" }} className='card-title'>
									{this.state.restaurants.cuisines}
								</h2>
								<p style={{ fontFamily: "Livvic, sans-serif" }}>{location}</p>
								<p style={{ fontFamily: "Livvic, sans-serif" }}>
									{this.state.restaurants.cuisines}
								</p>
							</div>
							<div className='float-right'>
								<h2 style={{ backgroundColor: "green" }}>{rating}/5</h2>
								<p style={{ fontFamily: "Livvic, sans-serif" }}>{vote_count + " "}votes</p>
							</div>
						</div>
					</div>
				</div> */}
			</React.Fragment>
		);
	}
}
