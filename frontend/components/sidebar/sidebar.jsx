import React from 'react';
import { Link } from 'react-router-dom';

import { SPLASH ,ABOUT, LAUTH } from '../../util/route_utils';

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
        this.state = {
            sidebarSize: this.props.coverage
        };
    }

    render(){
        // impliment turnary with full and collapsed sidebar row as
        // className and control sidebar display via CSS
        const classSizeName = this.state.sidebarSize ? 'sidebar-row' : 'closed-row';
        const LoggedinSidebar = () => (
            <div>
                <Link className='row-link' to={SPLASH}>
                    <SidebarRow 
                        Icon={HomeIcon} linkName={SPLASH}
                        title='Home' coverClass={classSizeName}
                    />
                </Link>
                <SidebarRow 
                    Icon={TrendingIcon} 
                    title='Trending' coverClass={classSizeName}
                />
                <SidebarRow 
                    Icon={SubscriptionIcon} 
                    title='Subscriptions' coverClass={classSizeName}
                />
                <hr />
                <SidebarRow 
                    Icon={HistoryIcon} 
                    title='History' coverClass={classSizeName}
                />
                <SidebarRow 
                    Icon={YourVidIcon} 
                    title='Your Videos' coverClass={classSizeName}
                />
                <SidebarRow 
                    Icon={ClockIcon} 
                    title='Watch Later' coverClass={classSizeName}
                />
                <SidebarRow 
                    Icon={LikeIcon} 
                    title='Liked Videos' coverClass={classSizeName}
                />
                <hr />
                <Link className='row-link' to={ABOUT}>
                    <SidebarRow 
                        Icon={LinksIcon} linkName={ABOUT}
                        title='About' coverClass={classSizeName}
                    />
                </Link>
                <hr />
            </div>
        );

        const LoggedoutSidebar = () => (
          <div>
            <Link to={SPLASH}>
                <SidebarRow
                    selected={true} Icon={HomeIcon}
                    title='Home' coverClass={classSizeName}
                />
            </Link>
            <SidebarRow
              selected={false} Icon={TrendingIcon} title="Trending"
            />
            <hr />
            <div >
            <p className='login-message'>
                Please Login to like videos, comment, and subscribe
            </p>
              <Link className='session-link' to={LAUTH}>
                <button className="session-button"><UserIcon/>Log In</button>
              </Link>
            </div>
            <hr />
                <Link to={ABOUT}>
                    <SidebarRow
                        selected={false} Icon={LinksIcon}
                        title='About' coverClass={classSizeName}
                    />
                </Link>
            <hr />
          </div>
        );

        return (
            this.props.currentUser ? LoggedinSidebar() : LoggedoutSidebar()
        )
    }
}

export default SideBar;