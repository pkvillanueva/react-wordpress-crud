import axios from 'axios';

import { REQUEST_APPLICANTS, FETCH_APPLICANTS } from './types';

const axiosInstance = axios.create({
	baseURL: WPOBJ.restRoot,
	headers: {
		'X-WP-Nonce': WPOBJ.restNonce
	},
	auth: {
		username: process.env.BASIC_AUTH_USERNAME,
		password: process.env.BASIC_AUTH_PASSWORD
	}
});

export const fetchApplicants = () => async dispatch => {
	dispatch({ type: REQUEST_APPLICANTS });

	const res = await axiosInstance.get('wp/v2/applicants/?per_page=100');
	dispatch({ type: FETCH_APPLICANTS, payload: res.data });
};

export const fetchSingleApplicant = id => async dispatch => {
	dispatch({ type: REQUEST_APPLICANTS });

	const res = await axiosInstance.get(`wp/v2/applicants/${id}`);
	dispatch({ type: FETCH_APPLICANTS, payload: [res.data] });
};

export const submitApplicant = (values, history) => async dispatch => {
	const data = {
		status: 'publish',
		title: `${values.firstName} ${values.lastName}`,
		first_name: values.firstName,
		last_name: values.lastName,
		nationality: values.nationality,
		gender: values.gender,
		phone: values.phone,
		birthday: values.birthday,
		email: values.email,
		country: values.country,
		address: values.address,
		state: values.state,
		city: values.city,
		zip: values.zip,
		mode_of_contact: values.modeOfContact,
		education_background: JSON.stringify({
			school: values.educBgSchool,
			degree: values.educBgDegree,
			area: values.educBgArea
		})
	};

	const res = await axiosInstance.post('wp/v2/applicants', data);

	history.push('/edit/' + res.data.id);
	dispatch({ type: REQUEST_APPLICANTS });
};
