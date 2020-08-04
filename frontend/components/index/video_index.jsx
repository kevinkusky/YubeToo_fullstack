import React from 'react';
import SidebarRow from './sidebar_row';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ videos }) => {
    return (
        <div className='index-page'>
            <div className='side-bar'>
                <SidebarRow Icon={} title='' />
                <SidebarRow Icon={} title='' />
                <SidebarRow Icon={} title='' />
            </div>
            <div className='index-half'>
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