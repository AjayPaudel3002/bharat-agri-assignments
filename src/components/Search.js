import React from "react";

// import { FadeTransform, Fade, Stagger } from "react-animation-components";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Search extends React.Component {
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<div className='container text-center'>
					<div className='row'>
						{this.props.movies.map((item, index) => {
							return (
								<div
									onClick={() => this.props.history.push(`/movies?title=${item.Title}`)}
									key={"movie-" + index}
									style={{ cursor: "pointer" }}
									className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-5  '
								>
									<div
										className='card'
										style={{
											width: "21rem",
											height: "500px",
											boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"
										}}
									>
										{item.Poster !== "N/A" ? (
											<img
												src={item.Poster}
												className='card-img-top'
												alt='...'
												style={{ height: "250px" }}
											/>
										) : (
											<img
												src='/placeholder.png'
												className='card-img-top'
												alt='...'
												style={{ height: "250px" }}
											/>
										)}
										<div className='card-body'>
											<h4 className='card-title'>{item.Title}</h4>
											<p className='card-text'>
												<i className='fas fa-compact-disc' />
												<span> {item.Type}</span>
											</p>
											<p className='card-text'>
												<i className='fas fa-calendar-week' />
												<span> {item.Year}</span>
											</p>
											<p className='card-text'>
												<i className='fab fa-imdb' />
												<strong> {item.imdbID}</strong>
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
