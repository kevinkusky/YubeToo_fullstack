import {combineReducers} from 'redux';
import session from './session/session';
import entities from './entities';
import errors from './errors';

export default combineReducers({
    session,
    entities,
    errors
});