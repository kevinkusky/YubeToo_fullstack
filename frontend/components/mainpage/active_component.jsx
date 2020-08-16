import React from 'react';

import IndexContainer from '../index/index_container';
import About from '../about/about';

class ActiveComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        switch(this.props.display){
            case 'Home':
                return(<IndexContainer />);
            case 'About':
                return(<About />);
            // case 'Your Videos':
            //     return(<UserVideoIndex />)
            // case 'Liked Videos':
            //     return(<LikeIndexContainer />)
            // case 'Subscriptions':
            //     return(<SubscriptionIndexContainer />)
            default:
                return(<IndexContainer />);
        }
    }
}

export default ActiveComponent;