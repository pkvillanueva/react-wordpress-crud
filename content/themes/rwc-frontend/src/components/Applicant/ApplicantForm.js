import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ApplicantForm = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field name="firstName" component="input" type="text" />
			<Field name="lastName" component="input" type="text" />
			<Field name="gender" component="input" type="text" />
			<Field name="phone" component="input" type="text" />
			<Field name="email" component="input" type="email" />
			<Field name="country" component="input" type="text" />
			<Field name="state" component="input" type="text" />
			<Field name="city" component="input" type="text" />
			<Field name="address" component="input" type="text" />
			<Field name="nationality" component="input" type="text" />
			<Field name="birthday" component="input" type="text" />
			<Field name="educBgSchool" component="input" type="text" />
			<Field name="educBgDegree" component="input" type="text" />
			<Field name="educBgArea" component="input" type="text" />
			<button type="submit">Submit</button>
		</form>
	);
};

ApplicantForm = reduxForm({
	form: 'applicantForm'
})(ApplicantForm);

export default ApplicantForm;
