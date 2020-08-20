import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute, ABOUT, SPLASH, DUMMY } from "../../util/route_utils";
import IndexContainer from '../index/index_container';
import About from '../about/about';
import Dummy from './dummy';

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
                    <Route exact path={ABOUT} component={About}/>
                    <Route exact path={SPLASH} component={IndexContainer}/>
                    <Route exact path={DUMMY} component={Dummy}/>
                    {/* <Route exact path={TREND} component={TrendingIndex}/>
                    <Route exact path={HISTORY} component={HistoryIndex} />
                    <Route exact path={LIKED} component={LikedIndex} /> */}
                </Switch>
            </div>
        )
    }
}

export default ActiveComponent;