import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, SPLASH, LAUTH, SUPAUTH, NEWVID, ABOUT } from "../util/route_utils";
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import VideoFormContainer from  './video/video_form_container';
import MainPageContainer from './mainpage/mainpage_container';

const App = () => (
  <div className="app">
        <Switch>
        <AuthRoute exact path={LAUTH} component={SigninContainer} />
        <AuthRoute exact path={SUPAUTH} component={SignupContainer} />
        <ProtectedRoute exact path={NEWVID} component={VideoFormContainer} />
        <Route path={SPLASH} component={MainPageContainer} />
        </Switch>
  </div>
);

export default App;
