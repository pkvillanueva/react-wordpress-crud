import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';

import * as validate from '../../utilities/validate';
import countries from '../../utilities/countries';

class ApplicantForm extends Component {
	countryOptions() {
		return countries.map((country, index) => {
			return (
				<option key={index} value={country}>
					{country}
				</option>
			);
		});
	}

	renderField(field) {
		let fieldClass = classNames(field.className, {
			'is-invalid': field.meta.touched && field.meta.error ? true : false
		});

		return (
			<div>
				{field.isSelect ? (
					<select
						{...field.input}
						children={field.children}
						placeholder={field.placeholder}
						className={fieldClass}
					/>
				) : (
					<input
						{...field.input}
						placeholder={field.placeholder}
						className={fieldClass}
						type={field.type}
					/>
				)}
				{field.meta.touched &&
					field.meta.error && (
						<span className="invalid-feedback">{field.meta.error}</span>
					)}
			</div>
		);
	}

	render() {
		return (
			<form
				className="page-applicants__form"
				onSubmit={this.props.handleSubmit}
			>
				<div className="card">
					<div className="card-header text-white bg-primary">
						<h5>Personal Information</h5>
					</div>
					<div className="card-body">
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="firstName">
									First Name <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="John"
									name="firstName"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="lastName">
									Last Name <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="Doe"
									name="lastName"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="nationality">
									Nationality <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="American"
									name="nationality"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="gender">
									Gender <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="Male"
									name="gender"
									component={this.renderField}
									validate={[validate.required]}
								>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</Field>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="phone">
									Phone <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="+963852741"
									name="phone"
									component={this.renderField}
									type="text"
									validate={[validate.required, validate.phoneCount]}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="birthday">
									Birthday <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="Birthday"
									name="birthday"
									component={this.renderField}
									type="date"
									validate={[validate.required]}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="email">
									Email <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="email@example.com"
									name="email"
									component={this.renderField}
									type="email"
									validate={[validate.required, validate.email]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header text-white bg-primary">
						<h5>Your Address</h5>
					</div>
					<div className="card-body">
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="country">
									Country <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="USA"
									name="country"
									component={this.renderField}
									validate={[validate.required]}
								>
									{this.countryOptions()}
								</Field>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="state">
									State <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="Florida"
									name="state"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="address">
									Address <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="ABC West 321"
									name="address"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="city">
									City <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="Miami"
									name="city"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="zip">
									Zip <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="321654"
									name="zip"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header text-white bg-primary">
						<h5>Educational Background</h5>
					</div>
					<div className="card-body">
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="educBgSchool">
									School <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="XYZ University"
									name="educBgSchool"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="educBgDegree">
									Degree <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="College"
									name="educBgDegree"
									component={this.renderField}
									type="text"
									validate={[validate.required]}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="educBgArea">Area of Study</label>
								<Field
									className="form-control"
									placeholder="BS in Computer Science"
									name="educBgArea"
									component="input"
									type="text"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header text-white bg-primary">
						<h5>Preferred Mode of Contact</h5>
					</div>
					<div className="card-body">
						<div className="form-row">
							<div className="form-group col-md-12">
								<label htmlFor="modeOfContact">
									Select mode of contact <span className="text-danger">*</span>
								</label>
								<Field
									className="form-control"
									placeholder="XYZ University"
									name="modeOfContact"
									component={this.renderField}
									validate={[validate.required]}
									isSelect={true}
								>
									<option value="">None</option>
									<option value="Email">Email</option>
									<option value="Phone">Phone</option>
								</Field>
							</div>
						</div>
					</div>
				</div>
				<div className="page-applicants__form-submit">
					<button type="submit" className="btn btn-success">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

ApplicantForm = reduxForm({
	form: 'applicantForm',
	onSubmitFail: (errors, test) => {
		const errorEl = document.querySelector(
			Object.keys(errors)
				.map(fieldName => `[name="${fieldName}"]`)
				.join(',')
		);

		// Do focus on error field.
		if (errorEl && errorEl.focus) {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
				rect = errorEl.getBoundingClientRect(),
				offset = 50;

			window.scrollTo(0, rect.top + scrollTop - offset);
			errorEl.focus();
		}
	}
})(ApplicantForm);

export default ApplicantForm;
