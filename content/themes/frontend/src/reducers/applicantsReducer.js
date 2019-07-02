import { REQUEST_APPLICANTS, FETCH_APPLICANTS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case REQUEST_APPLICANTS:
			return [];

		case FETCH_APPLICANTS:
			return action.payload || [];

		default:
			return state;
	}
}
