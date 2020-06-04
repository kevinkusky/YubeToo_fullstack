import React from 'react';
import SignupContainer from './session/signup_container';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';

const App = () => (
    <div className="app">
        {/* <h3>Hello From app jsx</h3> */}
        <header>
            <h1>YubeToo</h1>
            {/* <ToplineNav /> */}
        </header>
        <Switch>
            {/* AuthRoute - needs to be defined route util */}
            {/* <AuthRoute exact path='/login' component={LoginContainer}/>
            <AuthRoute exact path='/signup' component={SignupContainer}/> */}
            <Route path='/signup' component={SignupContainer} />
        </Switch>
        {/* <SignupContainer /> */}
    </div>
);

export default App;