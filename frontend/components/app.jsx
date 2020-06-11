import React from 'react';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import VideoFormContainer from  './video/video_form_container';
import TopNav from './navs/topnav';

const App = () => (
    <div className="app">
        <Switch>
            {/* AuthRoute/ProtectedRoute - defined route util */}
            <AuthRoute exact path='/login' component={SigninContainer}/>
            <AuthRoute exact path='/signup' component={SignupContainer}/>
            <Route exact path='/' component={TopNav}/>
            <ProtectedRoute exact path='/videos/new' component={VideoFormContainer}/>
        </Switch>
    </div>
);

export default App;