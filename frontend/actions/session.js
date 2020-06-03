import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

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

export const createNewUser = user => dispatch => (
    APIUtil.signupUser(user).then(
        user => dispatch(receiveCurrentUser(user))
    )
);
export const loginUser = user => dispatch => (
    APIUtil.loginUser(user).then(
        user => dispatch(receiveCurrentUser(user))
    )
);
export const logoutUser = () => dispatch => (
    APIUtil.logoutSession().then(
        () => dispatch(logoutCurrentUser())
    )
);