import React from 'react';
import VideoIndexItem from './video_index_item';


const VideoIndex = ({ videos })=> {
    return(
        <div>
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