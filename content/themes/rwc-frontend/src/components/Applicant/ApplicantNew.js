import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ApplicantForm from './ApplicantForm';
import { submitApplicant } from '../../actions';

class ApplicantNew extends Component {
	render() {
		return (
			<div className="applicant applicant--new">
				<h3 className="applicant__title">Add New Applicant</h3>
				<ApplicantForm onSubmit={(values) => this.props.submitApplicant(values, this.props.history)} />
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
