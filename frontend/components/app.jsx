import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import { SPLASH, LAUTH, SUPAUTH, NEWVID } from "../util/route_utils";
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import VideoFormContainer from  './video/video_form_container';
import IndexContainer from './index/index_container';
import TopNav from './navs/topnav';

const App = () => (
  <div className="app">
    <TopNav />
    <Switch>
      <Route exact path={SPLASH} component={IndexContainer} />
      <AuthRoute exact path={LAUTH} component={SigninContainer} />
      <AuthRoute exact path={SUPAUTH} component={SignupContainer} />
      <ProtectedRoute exact path={NEWVID} component={VideoFormContainer} />
    </Switch>
  </div>
);

export default App;