import React from 'react';
import TopNav from '../navs/topnav';
import VideoIndexItem from './video_index_item';


const VideoIndex = ({ videos })=> {
    // const videos = props.fetchVideos();

    return(
        <div>
            <TopNav />
            <h2>All Recomendations</h2>
            {videos.map(video =>(
                <VideoIndexItem
                    video={video}
                    key={video.id}
                />
            ))}
        </div>
    )
};

export default VideoIndex;