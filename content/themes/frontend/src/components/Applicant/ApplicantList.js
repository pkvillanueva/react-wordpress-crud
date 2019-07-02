import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchApplicants } from '../../actions';

class ApplicantList extends Component {
	componentDidMount() {
		this.props.fetchApplicants();
	}

	renderApplicants() {
		return (
			<div className="content">
				<table className="data-table table table-hover table-bordered">
					<thead className="thead-dark">
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{this.props.applicants ? (
							this.props.applicants.map((data, i) => {
								return (
									<tr key={i}>
										<td>
											<Link to={`/edit/${data.id}`}>
												{`${data.first_name} ${data.last_name}`}
											</Link>
										</td>
										<td>{data.email}</td>
										<td>{data.country}</td>
									</tr>
								);
							})
						) : (
							<tr className="data-table__empty">
								<td className="data-table__error-text" colSpan="5">
									No data found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}

	render() {
		return (
			<div className="page-applicants app__page">
				<div className="toolbar">
					<h3 className="toolbar__title">List of Applicants</h3>
					<Link className="toolbar__button btn btn-primary" to="/new">
						Add New
					</Link>
				</div>
				{this.renderApplicants()}
			</div>
		);
	}
}

const mapStateToProps = ({ applicants }) => ({
	applicants: applicants
});

const mapDispatchToProps = dispatch => ({
	fetchApplicants() {
		dispatch(fetchApplicants());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantList);
