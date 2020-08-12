import React from 'react';
import { Link } from 'react-router-dom';
import SidebarRow from './sidebar_row';
import {ABOUT} from '../../util/route_utils';
import HomeIcon from '@material-ui/icons/Home';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import YourVidIcon from '@material-ui/icons/OndemandVideo';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ClockIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/HistoryOutlined';
import LinksIcon from '@material-ui/icons/InfoOutlined';

const SideBar = ({ coverage, componentSwitch }) => {
    // pass componentSwitch to row item
    // utilize to render component
    return (
        <div>
            <SidebarRow selected={true} Icon={HomeIcon} title='Home' />
            <SidebarRow selected={false} Icon={TrendingIcon} title='Trending' />
            <SidebarRow selected={false} Icon={SubscriptionIcon} title='Subscriptions' />
            <hr />
            <SidebarRow selected={false} Icon={HistoryIcon} title='History' />
            <SidebarRow selected={false} Icon={YourVidIcon} title='Your Videos' />
            <SidebarRow selected={false} Icon={ClockIcon} title='Watch Later' />
            <SidebarRow selected={false} Icon={LikeIcon} title='Liked Videos' />
            <hr />
            <Link className='link-item' to={ABOUT}>
                <SidebarRow selected={false} Icon={LinksIcon} title='About' />
            </Link>
            <hr />
        </div>
    )
};

export default SideBar;