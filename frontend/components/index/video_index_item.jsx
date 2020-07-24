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
                <div>
                    <img src={title_card_url}/>
                    <div>
                        <span className='video-title'>{title}</span>
                        <div className='secondary-info'>

                        </div>
                        <span className='video-discription'></span>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);