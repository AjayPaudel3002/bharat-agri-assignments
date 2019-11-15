import React from "react";
import axios from "axios";
import Nav from "./Nav";
import {Pagination} from "./Pagination";
import { getUserFromCookie } from "../users/index";

export default class Search extends React.Component {
	render() {
		let user = getUserFromCookie("name");
        console.log(this.props.totalCounts);
        let totalCounts = this.props.totalCounts
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						{this.props.movies.map((item, index) => {
							return (
								<div
									key={"movie-" + index}
									className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3  '
								>
									<div className='card' style={{ width: "18rem", height: "400px" }}>
										<img
											src={item.Poster}
											className='card-img-top'
											alt='...'
											style={{ height: "150px" }}
										/>
										<div className='card-body'>
											<h4 className='card-title'>{item.Title}</h4>
											<p className='card-text'>{"Type :" + item.Type}</p>
											<p className='card-text'>{"Year :" + item.Year}</p>
											<p className='card-text'>{"imdbID :" + item.imdbID}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
                    <Pagination totalCounts = { totalCounts}></Pagination>
				</div>
			</React.Fragment>
		);
	}
}
