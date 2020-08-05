import React from 'react';
import SideBar from './sidebar';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ videos }) => {
    return (
        <div className='index-page'>
            <SideBar />

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