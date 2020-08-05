import React from 'react';
import SidebarRow from './sidebar_row';
import HomeIcon from '@material-ui/icons/Home';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import YourVidIcon from '@material-ui/icons/OndemandVideo';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ClockIcon from '@material-ui/icons/WatchLater';

const SideBar = () => {
    // possible solution - pass Links as props and wrap the
    // SideabrRow component in Link
    return (
        <div className='side-bar'>
            <SidebarRow selected Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={TrendingIcon} title='Trending' />
            <SidebarRow Icon={SubscriptionIcon} title='Subscriptions' />
            <hr />
            <SidebarRow Icon={YourVidIcon} title='Your Videos' />
            <SidebarRow Icon={ClockIcon} title='Watch Later' />
            <SidebarRow Icon={LikeIcon} title='Liked Videos' />
            <hr />
        </div>
    )
};

export default SideBar;