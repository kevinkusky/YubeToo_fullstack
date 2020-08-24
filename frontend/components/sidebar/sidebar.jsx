import React from 'react';
import { Link } from 'react-router-dom';

import { SPLASH, ABOUT, DUMMY, LAUTH, TREND } from '../../util/route_utils';

import SidebarRow from './sidebar_row';

import HomeIcon from '@material-ui/icons/Home';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import YourVidIcon from '@material-ui/icons/OndemandVideo';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ClockIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/HistoryOutlined';
import LinksIcon from '@material-ui/icons/InfoOutlined';
import UserIcon from '@material-ui/icons/AccountCircle';

class SideBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // impliment turnary with full and collapsed sidebar row as
        // className and control sidebar display via CSS
        const classSizeName = this.props.sidebarSize ? 'sidebar-row' : 'closed-row';
        const classClearName = this.props.sidebarSize ? 'sidebar-row' : 'hide-row';
        const LoggedinSidebar = () => (
            <div>
                <SidebarRow 
                    Icon={HomeIcon}
                    title='Home'
                    coverClass={classSizeName}
                    pathName={SPLASH}
                />
                <SidebarRow 
                    Icon={TrendingIcon} 
                    title='Trending'
                    coverClass={classSizeName}
                    pathName={TREND}
                />
                <SidebarRow 
                    Icon={SubscriptionIcon} 
                    title='Subscriptions'
                    coverClass={classSizeName}
                    pathName={DUMMY}
                />
                <hr />
                <SidebarRow 
                    Icon={HistoryIcon} 
                    title='History'
                    coverClass={classSizeName}
                    pathName={DUMMY}
                />
                <SidebarRow 
                    Icon={YourVidIcon} 
                    title='Your Videos'
                    coverClass={classClearName}
                    pathName={DUMMY}
                />
                <SidebarRow 
                    Icon={ClockIcon} 
                    title='Watch Later'
                    coverClass={classClearName}
                    pathName={DUMMY}
                />
                <SidebarRow 
                    Icon={LikeIcon} 
                    title='Liked Videos'
                    coverClass={classSizeName}
                    pathName={DUMMY}
                />
                <hr />
                <SidebarRow 
                    Icon={LinksIcon}
                    title='About'
                    coverClass={classSizeName}
                    pathName={ABOUT}
                />
                <hr />
            </div>
        );

        const LoggedoutSidebar = () => (
          <div>
            <SidebarRow
                Icon={HomeIcon}
                title='Home'
                coverClass={classSizeName}
                pathName={SPLASH}
            />
            <SidebarRow
                Icon={TrendingIcon} 
                title="Trending"
                coverClass={classSizeName}
                pathName={DUMMY}
            />
            <hr />
            <div >
                <p className='login-message'>
                    Please Login to like videos, comment, and subscribe
                </p>
                <Link className='session-link' to={LAUTH}>
                    <button className="session-button">
                        <UserIcon/>
                        <span>Log In</span>
                    </button>
                </Link>
            </div>
            <hr />
            <SidebarRow
                Icon={LinksIcon}
                title='About'
                coverClass={classSizeName}
                pathName={ABOUT}
            />
            <hr />
          </div>
        );

        return (
            this.props.currentUser ? LoggedinSidebar() : LoggedoutSidebar()
        )
    }
}

export default SideBar;