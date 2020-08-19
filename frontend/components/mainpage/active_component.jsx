import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute, ABOUT, SPLASH } from "../../util/route_utils";
import IndexContainer from '../index/index_container';
import About from '../about/about';

class ActiveComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // switch(this.props.display){
        //     case 'Home':
        //         return(<IndexContainer />);
        //     case 'About':
        //         return(<About />);
        //     // case 'Your Videos':
        //     //     return(<UserVideoIndex />)
        //     // case 'Liked Videos':
        //     //     return(<LikeIndexContainer />)
        //     // case 'Subscriptions':
        //     //     return(<SubscriptionIndexContainer />)
        //     default:
        //         return(<IndexContainer />);
        // }

        return(
            <div>
                <Switch>
                    <Route exact path={ABOUT} component={About}/>
                    <Route exact path={SPLASH} component={IndexContainer}/>
                    {/* <Route exact path={TREND} component={TrendingIndex}/>
                    <Route exact path={HISTORY} component={HistoryIndex} />
                    <Route exact path={LIKED} component={LikedIndex} /> */}
                </Switch>
            </div>
        )
    }
}

export default ActiveComponent;