import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import { AuthRoute } from '../util/route_utils';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';

const App = () => (
    <div className="app">
        {/* <h3>Hello From app jsx</h3> */}
        <header className='nav-bar'>
            <nav>
                <ul className='nav-left'>
                    <Link to='/' className='header-link'>
                        <li><h3 className='logo'>{"▷"}</h3></li>
                        <li><h3 className='site-name'>YubeToo</h3></li>
                    </Link>
                </ul>
                <GreetingContainer  />
            </nav>
        </header>
        <Switch>
            {/* AuthRoute - needs to be defined route util */}
            <AuthRoute exact path='/login' component={SigninContainer}/>
            <AuthRoute exact path='/signup' component={SignupContainer}/>
        </Switch>
        {/* <SignupContainer /> */}
    </div>
);

export default App;
// greeting container - 