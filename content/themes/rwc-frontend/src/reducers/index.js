import { combineReducers } from 'redux';

import applicantsReducer from './applicantsReducer';

export default combineReducers({
	applicants: applicantsReducer
});
