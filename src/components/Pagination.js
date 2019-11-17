import React from "react";

export class Pagination extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className='container'>
				<React.Fragment>
					{this.props.totalCounts !== 0 ? (
						<nav aria-label='Page navigation example d-flex justify-content-center'>
							<ul className='pagination justify-content-center '>
								{Number(this.props.totalCounts) >= Number(this.props.search.page) - 1 &&
								Number(this.props.search.page) > 1 ? (
									<li>
										<button
											type='button'
											className=' btn btn-outline-dark'
											onClick={e => this.props.changePage(Number(this.props.search.page) - 1)}
											name={Number(this.props.search.page) - 1}
										>
											{" "}
											Prev
										</button>
									</li>
								) : (
									<li>
										<button
											type='button'
											className=' btn btn-outline-dark disabled'
											disabled
											name={Number(this.props.search.page) - 1}
										>
											{" "}
											Prev
										</button>
									</li>
								)}

								{Number(this.props.totalCounts) >= Number(this.props.search.page) + 1 ? (
									<li
										style={{ cursor: "pointer" }}
										className='page-item page-link'
										onClick={e => this.props.changePage(e.target.textContent)}
										name={Number(this.props.search.page) + 1}
									>
										{Number(this.props.search.page) + 1}
									</li>
								) : null}
								{this.props.totalCounts >= Number(this.props.search.page) + 2 ? (
									<li
										style={{ cursor: "pointer" }}
										className='page-item page-link '
										onClick={e => this.props.changePage(e.target.textContent)}
										name={Number(this.props.search.page) + 2}
									>
										{Number(this.props.search.page) + 2}
									</li>
								) : null}
								{this.props.totalCounts >= Number(this.props.search.page) + 3 ? (
									<li
										style={{ cursor: "pointer" }}
										className='page-item page-link'
										onClick={e => this.props.changePage(e.target.textContent)}
										name={Number(this.props.search.page) + 3}
									>
										{Number(this.props.search.page) + 3}
									</li>
								) : null}
								{this.props.totalCounts >= Number(this.props.search.page) + 1 ? (
									<li>
										<button
											type='button'
											className='btn btn-outline-dark'
											onClick={e => this.props.changePage(Number(this.props.search.page) + 1)}
											name={Number(this.props.search.page) + 1}
										>
											{" "}
											Next
										</button>
									</li>
								) : (
									<li>
										<button
											typer='button'
											className=' btn btn-outline-dark disabled'
											disabled
											name={Number(this.props.search.page) + 1}
										>
											Next
										</button>
									</li>
								)}
							</ul>
						</nav>
					) : null}
				</React.Fragment>
			</div>
		);
	}
}
