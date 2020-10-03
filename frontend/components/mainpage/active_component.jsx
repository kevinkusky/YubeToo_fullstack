import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute, SPLASH, TREND, DUMMY, USERVID, HIST } from "../../util/route_utils";
import IndexContainer from '../index/video_index';
import UserIndex from '../index/user_index';
import About from '../about/about';
import TrendingIndex from '../index/trending_index';
import HistoryIndex from '../index/history_index';
import Dummy from '../index/dummy';

class ActiveComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentdidMount(){
        this.props.findActive();
    }


    render(){
        return(
            <div>
                <Switch>
                    <Route exact path={SPLASH} component={IndexContainer}/>
                    <Route exact path={DUMMY} component={Dummy}/>
                    <Route exact path={TREND} component={TrendingIndex}/>
                    <Route exact path={USERVID} component={UserIndex} />
                    <Route exact path={HIST} component={HistoryIndex} />
                    {/* <Route exact path={LIKED} component={LikedIndex} /> */}
                </Switch>
            </div>
        )
    }
}

export default ActiveComponent;