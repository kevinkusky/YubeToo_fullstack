import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = user => (
    {
        type: RECEIVE_CURRENT_USER,
        user
    }
);

const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
);
const receiveErrors = errors => (
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
);

export const createNewUser = user => dispatch => (
    APIUtil.signupUser(user).then(
        user => dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    )
);
export const loginUser = user => dispatch => (
    APIUtil.loginUser(user).then(
        user => dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    )
);
export const logoutUser = () => dispatch => (
    APIUtil.logoutSession().then(
        () => dispatch(logoutCurrentUser())
    )
);
