import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSingleApplicant } from '../../actions';

class ApplicantEdit extends Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.fetchSingleApplicant(id);
	}

	renderApplicantInformation() {
		let data = this.props.applicants[0] || false;

		if (data) {
			data.education_background = JSON.parse(data.education_background);
		}

		return (
			<div className="information">
				{data ? (
					<div className="card">
						<div className="card-header text-white bg-primary">
							<h5>Applicant Information</h5>
						</div>
						<div className="card-body">
							<div className="information__section">
								<h6>Personal Information</h6>
								<hr />
								<div className="form-row">
									<div className="form-group col-md-12">
										<label>Full Name</label>
										<div className="form-control">{`${data.first_name} ${data.last_name}`}</div>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Nationality</label>
										<div className="form-control">{data.nationality}</div>
									</div>
									<div className="form-group col-md-6">
										<label>Gender</label>
										<div className="form-control">{data.gender}</div>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Phone</label>
										<div className="form-control">{data.phone}</div>
									</div>
									<div className="form-group col-md-6">
										<label>Birthday</label>
										<div className="form-control">{data.birthday}</div>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Email</label>
										<div className="form-control">{data.email}</div>
									</div>
								</div>
							</div>
							<div className="information__section">
								<h6>Full Address</h6>
								<hr />
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Country</label>
										<div className="form-control">{data.country}</div>
									</div>
									<div className="form-group col-md-6">
										<label>State</label>
										<div className="form-control">{data.state}</div>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-12">
										<label>Address</label>
										<div className="form-control">{data.address}</div>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>City</label>
										<div className="form-control">{data.city}</div>
									</div>
									<div className="form-group col-md-6">
										<label>Zip</label>
										<div className="form-control">{data.zip}</div>
									</div>
								</div>
							</div>
							<div className="information__section">
								<h6>Education Background</h6>
								<hr />
								<div className="form-row">
									<div className="form-group col-md-12">
										<label>School</label>
										<div className="form-control">
											{data.education_background.school}
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Degree</label>
										<div className="form-control">
											{data.education_background.degree}
										</div>
									</div>
									<div className="form-group col-md-6">
										<label>Area of Study</label>
										<div className="form-control">
											{data.education_background.area}
										</div>
									</div>
								</div>
							</div>
							<div className="information__section">
								<h6>Preferred Mode of Contact</h6>
								<hr />
								<div className="form-row">
									<div className="form-group col-md-12">
										<label>Contact Via</label>
										<div className="form-control">{data.mode_of_contact}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="information__empty" />
				)}
			</div>
		);
	}

	render() {
		return (
			<div className="page-applicants app__page">
				<div className="toolbar">
					<h3 className="toolbar__title">Edit Applicant</h3>
					<Link className="toolbar__button btn btn-secondary" to="/">
						Back
					</Link>
				</div>
				<div className="content">{this.renderApplicantInformation()}</div>
			</div>
		);
	}
}

const mapStateToProps = ({ applicants }) => ({
	applicants: applicants
});

const mapDispatchToProps = dispatch => ({
	fetchSingleApplicant(id) {
		dispatch(fetchSingleApplicant(id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantEdit);
