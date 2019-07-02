import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import applicantsReducer from './applicantsReducer';

export default combineReducers({
	applicants: applicantsReducer,
	form: formReducer
});
