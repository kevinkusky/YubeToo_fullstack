import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import TopNav from './navs/topnav';
import { AuthRoute } from '../util/route_utils';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';

const App = () => (
    <div className="app">
        <Switch>
            {/* AuthRoute - needs to be defined route util */}
            <AuthRoute exact path='/login' component={SigninContainer}/>
            <AuthRoute exact path='/signup' component={SignupContainer}/>
            <Route exact path='/' component={TopNav}/>
        </Switch>
    </div>
);

export default App;
// greeting container - 