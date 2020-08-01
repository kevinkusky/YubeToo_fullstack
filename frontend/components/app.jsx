import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import VideoFormContainer from  './video/video_form_container';
import IndexContainer from './index/index_container';
import TopNav from './navs/topnav';

const App = () => (
  <div className="app">
    {/* <h3>Would you consider this reactionary?</h3> */}
    <TopNav />
    <Switch>
      {/* AuthRoute/ProtectedRoute - defined route util */}
      <AuthRoute exact path="/login" component={SigninContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={IndexContainer} />
      <ProtectedRoute exact path="/videos/new" component={VideoFormContainer} />
    </Switch>
  </div>
);

export default App;