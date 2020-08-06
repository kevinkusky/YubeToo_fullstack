import React from 'react';
import SideBar from './sidebar';
import VideoIndexItem from './video_index_item';

const VideoIndex = ({ videos }) => {
    return (
        <div className='index-page'>
            <SideBar />

            <div className='videos-index'>
                <h2 className='index-header'>All Recomendations</h2>
                <div className='videos-list'>
                    {videos.map(video => (
                        <VideoIndexItem
                            video={video}
                            key={video.id}
                        />
                    ))}
                    <div className='index-preview'>Video 1</div>
                    <div className='index-preview'>Video 2</div>
                    <div className='index-preview'>Video 5</div>
                    <div className='index-preview'>Video 7</div>
                    <div className='index-preview'>Video 8</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                    <div className='index-preview'>Video 9</div>
                </div>
            </div>
        </div>
    )
};

export default VideoIndex;