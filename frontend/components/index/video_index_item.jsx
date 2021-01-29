import React from 'react';
import { withRouter } from "react-router-dom";

import CurrentUserIcon from '../session/currentuser_icon';

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
        const video = this.props.video;
        const views = video.views !== 1 ? `${video.views} views` : '1 view';
        const creator = this.props.creator ? this.props.creator : video.creatorName;
        return(
            <div
                key={this.props.key} 
                className='index-preview' 
                onClick={this.handleClick}
            >
                <img className='index-pic' src={video.titlecardUrl} alt="titlecard image"/>
                <div className='card-info'>
                    <CurrentUserIcon
                        username={creator}
                        addClass="video-avatar"
                    />
                    <div className='card-text'>
                        <h4>{video.title}</h4>
                        <p>{creator}</p>
                        <p>{views} • {video.uploadTime}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);