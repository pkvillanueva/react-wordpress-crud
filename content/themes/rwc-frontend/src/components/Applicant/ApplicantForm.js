import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ApplicantForm = ({ handleSubmit }) => {
	return (
		<form className="applicant__form" onSubmit={handleSubmit}>
			<div className="card">
				<div className="card-header">
					<h5>Personal Information</h5>
				</div>
				<div className="card-body">
					<div className="form-row">
					  <div className="form-group col-md-6">    
				      <label htmlFor="firstName">First Name <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="John" name="firstName" component="input" type="text" />
					  </div>
					  <div className="form-group col-md-6">
				      <label htmlFor="lastName">Last Name <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="Doe" name="lastName" component="input" type="text" />
					  </div>
					</div>
					<div className="form-row">
					  <div className="form-group col-md-6">
				      <label htmlFor="nationality">Nationality <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="American" name="nationality" component="input" type="text" />
					  </div>
					  <div className="form-group col-md-6">    
				      <label htmlFor="gender">Gender <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="Male" name="gender" component="input" type="text" />
					  </div>
					</div>
					<div className="form-row">
					  <div className="form-group col-md-6">
				      <label htmlFor="phone">Phone <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="+963852741" name="phone" component="input" type="text" />
					  </div>
					</div>
					<div className="form-row">
					  <div className="form-group col-md-6">
				      <label htmlFor="birthday">Birthday <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="Birthday" name="birthday" component="input" type="date" />
					  </div>
					  <div className="form-group col-md-6">
				      <label htmlFor="email">Email <span className="text-danger">*</span></label>
				      <Field className="form-control" placeholder="email@example.com" name="email" component="input" type="email" />
					  </div>
					</div>
				</div>
			</div>
			<div className="card">
			  <div className="card-header">
			    <h5>Your Address</h5>
			  </div>
			  <div className="card-body">
			    <div className="form-row">
			      <div className="form-group col-md-4">
			        <label htmlFor="country">Country <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="USA" name="country" component="input" type="text" />
			      </div>
			    </div>
			    <div className="form-row">
			      <div className="form-group col-md-12">
			        <label htmlFor="address">Address <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="ABC West 321" name="address" component="input" type="text" />
			      </div>
			    </div>
			    <div className="form-row">			    
			      <div className="form-group col-md-4">
			        <label htmlFor="state">State <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="Florida" name="state" component="input" type="text" />
			      </div>
			      <div className="form-group col-md-4">
			        <label htmlFor="city">City <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="Miami" name="city" component="input" type="text" />
			      </div>
			      <div className="form-group col-md-4">
			        <label htmlFor="zip">Zip <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="321654" name="zip" component="input" type="text" />
			      </div>
			    </div>
			  </div>
			</div>
			<div className="card">
			  <div className="card-header">
			    <h5>Educational Background</h5>
			  </div>
			  <div className="card-body">
			    <div className="form-row">
			      <div className="form-group col-md-6">
			        <label htmlFor="educBgSchool">School <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="XYZ University" name="educBgSchool" component="input" type="text" />
			      </div>
			      <div className="form-group col-md-6">
			        <label htmlFor="educBgDegree">Degree <span className="text-danger">*</span></label>
			        <Field className="form-control" placeholder="College Degree" name="educBgDegree" component="input" type="text" />
			      </div>
			    </div>
			    <div className="form-row">
			      <div className="form-group col-md-6">
			        <label htmlFor="educBgArea">Area of Study</label>
			        <Field className="form-control" placeholder="BS in Computer Science" name="educBgArea" component="input" type="text" />
			      </div>
			    </div>
			  </div>
			</div>
			<div className="applicant__form-submit">
				<button type="submit" className="btn btn-primary">Submit</button>
			</div>
		</form>
	);
};

ApplicantForm = reduxForm({
	form: 'applicantForm'
})(ApplicantForm);

export default ApplicantForm;
