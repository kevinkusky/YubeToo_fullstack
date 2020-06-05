import { combineReducers } from 'redux';
import usersReducer from './users';
import errorsReducer from './errors';

export default combineReducers({
    users: usersReducer,
    errors: errorsReducer
});