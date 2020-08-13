import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, SPLASH, LAUTH, SUPAUTH, NEWVID, ABOUT } from "../util/route_utils";
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import VideoFormContainer from  './video/video_form_container';
import IndexContainer from './index/index_container';
import TopNav from './navs/topnav';
import About from './about/about';
import MainPage from './mainpage/mainpage';

const App = () => (
  <div className="app">
        <Switch>
        <Route exact path={SPLASH} component={MainPage} />
        <AuthRoute exact path={LAUTH} component={SigninContainer} />
        <AuthRoute exact path={SUPAUTH} component={SignupContainer} />
        <ProtectedRoute exact path={NEWVID} component={VideoFormContainer} />
        <Route exact path={ABOUT} component={About} />
        </Switch>
  </div>
);

export default App;
