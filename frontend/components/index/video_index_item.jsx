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
        const {title, title_card_url} = this.props.video;
        return(
            <div className='index-preview' onClick={this.handleClick}>
                <img 
                    className='preview-image' 
                    src={title_card_url}
                />
                <div className='preview-information'>
                    <span className='video-title'>{title}</span>
                    <ul className='secondary-info'>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <span className='video-discription'></span>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);