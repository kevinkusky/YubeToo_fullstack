import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

export const SPLASH = '/';
export const LAUTH = '/login';
export const SUPAUTH = '/signup';
export const NEWVID = '/videos/new';
export const ABOUT = '/aboutme';
export const DUMMY = '/dummy';

const mapStateToProps = state => ({
    //   grabbing id - stored in session slice
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={
            props =>(loggedIn ? <Redirect to="/" /> : <Component {...props} />)
        }
    />
);

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={
            props =>(loggedIn ? <Component {...props} /> : <Redirect to="/signup" />)
        }
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
