import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ApplicantForm from './ApplicantForm';
import { submitApplicant } from '../../actions';

class ApplicantNew extends Component {
	render() {
		return (
			<div className="page-applicants app__page">
				<div className="toolbar">
					<h3 className="toolbar__title">Add New Applicant</h3>
					<Link className="toolbar__button btn btn-secondary" to="/">
						Cancel
					</Link>
				</div>
				<div className="content">
					<ApplicantForm
						onSubmit={values =>
							this.props.submitApplicant(values, this.props.history)}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	submitApplicant(values, history) {
		dispatch(submitApplicant(values, history));
	}
});

export default connect(null, mapDispatchToProps)(withRouter(ApplicantNew));
