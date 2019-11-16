import React from "react";

export default class Search extends React.Component {
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						{this.props.movies.map((item, index) => {
							return (
								<div
									onClick={() => this.props.history.push(`/movies?title=${item.Title}`)}
									key={"movie-" + index}
									style= {{cursor:"pointer"}}
									className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4  '
								>
									<div className='card shadow-sm bg-white ' style={{ width: "23rem", height: "500px" }}>
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
