import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchApplicants } from '../actions';

class Applicants extends Component {
	componentDidMount() {
		this.props.fetchApplicants();
	}

	render() {
		return(
			<div className="applicants">
				<h1>List of all Applicants</h1>
				<ul className="applicants__list">
					{this.props.applicants.map(applicant => <li key={applicant.id}>{applicant.title.rendered}</li>)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ applicants }) => {
	return {
		applicants: applicants
	}
};

const mapDispatchToProps = dispatch => {
	return {
		fetchApplicants: () => {
			dispatch(fetchApplicants());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Applicants);
