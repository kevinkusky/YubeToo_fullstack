import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, SPLASH, LAUTH, SUPAUTH, NEWVID, WATCH } from "../util/route_utils";
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import VideoFormContainer from  './video/video_form_container';
import MainPageContainer from './mainpage/mainpage';
import ShowContainer from './video/show_container';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path={LAUTH} component={SigninContainer} />
      <AuthRoute exact path={SUPAUTH} component={SignupContainer} />
      <Route exact path={WATCH} component={ShowContainer}/>
      <ProtectedRoute exact path={NEWVID} component={VideoFormContainer} />
      <Route path={SPLASH} component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
