import axios from 'axios';

import { FETCH_APPLICANTS } from './types';

export const fetchApplicants = () => async dispatch => {
	const res = await axios.get(WPOBJ.restRoot + 'wp/v2/applicants');
	dispatch({ type: FETCH_APPLICANTS, payload: res.data });
};
