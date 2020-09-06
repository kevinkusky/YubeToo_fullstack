import React from 'react';
import { withRouter } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import { createView } from '../../util/video_util';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const videoId = this.props.video.id;
        const currentUser = this.props.user;
        createView({video_id: videoId, viewer_id: currentUser});
        this.props.history.push(`/videos/show/${videoId}`);
    }

    render() {
        // debugger        
        const video = this.props.video;
        const views = video.views !== 1 ? `${video.views} Views` : '1 View';
        const creator = this.props.creator ? this.props.creator : video.creator.username;
        return(
            <div
                key={this.props.key} 
                className='index-preview' 
                onClick={this.handleClick}
            >
                <img className='index-pic' src={video.titlecardUrl} alt=""/>
                <div className='card-info'>
                    <Avatar className='video-avatar'></Avatar>
                    <div className='card-text'>
                        <h4>{video.title}</h4>
                        <p>{creator}</p>
                        <p>
                            {views} • {video.uploadTime}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);