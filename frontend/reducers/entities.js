import { combineReducers } from 'redux';
import users from './users';
import videos from './videos';
import comments from './comments';
import likes from './likes';
import errors from './errors';

export default combineReducers({
    users,
    videos,
    comments,
    likes,
    errors
});