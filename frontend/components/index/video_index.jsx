import React from 'react';
import SidebarRow from './sidebar_row';
import HomeIcon from '@material-ui/icons/Home';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import YourVidIcon from '@material-ui/icons/OndemandVideo';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ClockIcon from '@material-ui/icons/WatchLater';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ videos }) => {
    return (
        <div className='index-page'>
            <div className='side-bar'>
                <SidebarRow selected Icon={HomeIcon} title='Home' />
                <SidebarRow Icon={TrendingIcon} title='Trending' />
                <SidebarRow Icon={SubscriptionIcon} title='Subscriptions' />
                <hr/>
                <SidebarRow Icon={YourVidIcon} title='Your Videos' />
                <SidebarRow Icon={ClockIcon} title='Watch Later' />
                <SidebarRow Icon={LikeIcon} title='Liked Videos' />
                <hr/>
            </div>
            <div className='videos-index'>
                <h2 className='index-header'>All Recomendations</h2>
                {videos.map(video => (
                    <VideoIndexItem
                        video={video}
                        key={video.id}
                    />
                ))}
            </div>
        </div>
    )
};

export default VideoIndex;