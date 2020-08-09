import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // image: this.props.video.titlecard,
            // title: this.props.video.title,
            // channel: this.props.video.creator,
            // views: this.props.video.viewCount,
            // timestamp: this.props.video.createdAt,
            image: 'image',
            title: 'title',
            author: 'author',
            views: 'views',
            timestamp: 'time',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const videoId = this.props.video.id;
        this.props.history.push(`/videos/${videoId}`);
    }

    render() {
        const { title, views, timestamp, channel, imageURL } = this.props.video;

        return(
            <div 
                className='index-preview' 
                onClick={this.handleClick}
            >
                <img src={imageURL} alt=""/>
                <div className='card-info'>

                    <div className='card-text'>
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>
                            {views} * {timestamp}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);