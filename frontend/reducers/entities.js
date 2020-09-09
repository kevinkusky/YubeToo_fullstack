import { combineReducers } from 'redux';
import users from './entities/users';
import videos from './entities/videos';
import comments from './entities/comments';
import likes from './entities/likes';
import errors from './errors';

export default combineReducers({
    users,
    videos,
    comments,
    likes,
    errors
});