import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, logoutUser } from '../../actions/session';
import Signin from './signin';

const mSTP = ({ entities: {errors} }) => (
    {
        errors: errors.session,
        navLink: <Link to="/signup">Not Valid Account Information - Sign Up Here!</Link>,
    }
);

const mDTP = dispatch => (
    // login/out based on helped logged_in?
    {
        loginUser: user => dispatch(loginUser(user)),
        logoutUser: ()=>dispatch(logoutUser())
    }
);

export default connect(mSTP, mDTP)(Signin);