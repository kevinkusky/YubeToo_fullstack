import { combineReducers } from 'redux';
import usersReducer from './users';
import videosReducer from './videos';
import errorsReducer from './errors';

export default combineReducers({
    users: usersReducer,
    videos: videosReducer,
    errors: errorsReducer
});