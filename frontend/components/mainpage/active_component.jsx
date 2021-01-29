import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LIKED, SPLASH, TREND, USERVID, HIST } from "../../util/route_utils";
import IndexContainer from '../index/video_index';
import UserIndex from '../index/user_index';
import LikedIndex from '../index/liked_index';
import TrendingIndex from '../index/trending_index';
import HistoryIndex from '../index/history_index';

class ActiveComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path={SPLASH} component={IndexContainer}/>
                    <Route exact path={TREND} component={TrendingIndex}/>
                    <Route exact path={USERVID} component={UserIndex} />
                    <Route exact path={HIST} component={HistoryIndex} />
                    <Route exact path={LIKED} component={LikedIndex} />
                </Switch>
            </div>
        )
    }
}

export default ActiveComponent;