import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const videoId = this.props.video.id;
        this.props.history.push(`/videos/${videoId}`);
    }

    render() {
        // singular video passed from index component
        const video = this.props.video;
        return(
            <div className='index-preview' onClick={this.handleClick}>
                <img 
                    className='preview-image' 
                    src={video.title_card_url}
                />
                <div className='preview-information'>
                    <span className='video-title'>{title}</span>
                    <ul className='secondary-info'>
                        <li className='name'></li>
                        <li className='count'>{video.viewCount}</li>
                        <li className='time'></li>
                    </ul>
                    <span className='video-discription'>{video.discription}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);