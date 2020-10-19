import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mSTP = ( { entities: { errors } } ) =>({
    // errors: errors.session,
    navLink: <Link to="/login">Already a Member, Please Sign In</Link>
});

const mDTP = dispatch =>({
        createNewUser: user => dispatch(createNewUser(user))
});

export default connect(mSTP, mDTP)(Signup);