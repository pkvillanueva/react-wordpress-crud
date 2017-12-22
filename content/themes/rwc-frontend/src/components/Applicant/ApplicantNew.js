import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ApplicantForm from './ApplicantForm';
import { submitApplicant } from '../../actions';

class ApplicantNew extends Component {
	render() {
		return (
			<ApplicantForm onSubmit={(values) => this.props.submitApplicant(values, this.props.history)} />
		);
	}
}

const mapDispatchToProps = dispatch => ({
	submitApplicant(values, history) {
		dispatch(submitApplicant(values, history));
	}
});
	
export default connect(null, mapDispatchToProps)(withRouter(ApplicantNew));
