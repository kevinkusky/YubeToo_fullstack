import React from 'react';
import { Link } from 'react-router-dom';

import { ABOUT, LAUTH } from '../../util/route_utils';

import SidebarRow from './sidebar_row';

import HomeIcon from '@material-ui/icons/Home';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import YourVidIcon from '@material-ui/icons/OndemandVideo';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ClockIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/HistoryOutlined';
import LinksIcon from '@material-ui/icons/InfoOutlined';

class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: 'Home'
        };
        this.componentPass = this.componentPass.bind(this);
    }

    componentPass(){
        return e => {
            this.setState({active: e.currentTarget.title});
            this.props.componentSwitch(e.currentTarget.title);
        };
    }

    render(){
        // impliment turnary with full and collapsed sidebar row as
        // variable SidebarRow to DRY up return

        const LoggedinSidebar = () => (
            <div>
                <SidebarRow selected={true} Icon={HomeIcon} title='Home' onClick={this.componentPass} />
                <SidebarRow selected={false} Icon={TrendingIcon} title='Trending' onClick={this.componentPass} />
                <SidebarRow selected={false} Icon={SubscriptionIcon} title='Subscriptions' onClick={this.componentPass} />
                <hr />
                <SidebarRow selected={false} Icon={HistoryIcon} title='History' onClick={this.componentPass} />
                <SidebarRow selected={false} Icon={YourVidIcon} title='Your Videos' onClick={this.componentPass} />
                <SidebarRow selected={false} Icon={ClockIcon} title='Watch Later' onClick={this.componentPass} />
                <SidebarRow selected={false} Icon={LikeIcon} title='Liked Videos' onClick={this.componentPass} />
                <hr />
                <SidebarRow selected={false} Icon={LinksIcon} title='About' onClick={this.componentPass} />
                <hr />
            </div>
            // this.props.coverage ? FullSidebarRow : ClosedSidebarRow
        );

        const LoggedoutSidebar = () => (
          <div>
            <SidebarRow selected={true} Icon={HomeIcon} title="Home" onClick={this.componentPass} />
            <SidebarRow selected={false} Icon={TrendingIcon} title="Trending" onClick={this.componentPass} />
            <hr />
            <div> 
                <p>
                    Please Log In to experience more YubeToo features
                </p>
                <Link to={LAUTH}>Log In</Link>
            </div>
            <hr/>
            <SidebarRow selected={false} Icon={LinksIcon} title="About" onClick={this.componentPass} />
            <hr />
          </div>
        );

        // let Sidebar = () => (
        //     this.state.currentUser ? 
        // )

        return (
            this.props.currentUser ? LoggedinSidebar() : LoggedoutSidebar()
        )
    }
}

export default SideBar;