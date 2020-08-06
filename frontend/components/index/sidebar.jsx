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
            <SidebarRow selected={true} Icon={HomeIcon} title='Home' />
            <SidebarRow selected={false} Icon={TrendingIcon} title='Trending' />
            <SidebarRow selected={false} Icon={SubscriptionIcon} title='Subscriptions' />
            <hr />
            <SidebarRow selected={false} Icon={YourVidIcon} title='Your Videos' />
            <SidebarRow selected={false} Icon={ClockIcon} title='Watch Later' />
            <SidebarRow selected={false} Icon={LikeIcon} title='Liked Videos' />
            <hr />
        </div>
    )
};

export default SideBar;