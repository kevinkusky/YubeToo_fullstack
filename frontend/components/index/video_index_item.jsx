import React from 'react';
import { withRouter } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const videoId = this.props.video.id;
        this.props.history.push(`/videos/show/${videoId}`);
    }

    render() {        
        const video = this.props.video;
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
                        <p>{video.creator.username}</p>
                        <p>
                            {video.views} Views * {video.uploadTime}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);