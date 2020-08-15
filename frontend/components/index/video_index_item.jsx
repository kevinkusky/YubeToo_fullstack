import React from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

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
        const { title, view_count, created_at, creator, titlecardURL } = this.props.video;

        const viewCount = view_count || 0;
        // const uploadDate = created_at;
        
        return(
            <div 
                className='index-preview' 
                onClick={this.handleClick}
            >
                <img className='index-pic' src={titlecardURL} alt=""/>
                <div className='card-info'>
                    <Avatar className='video-avatar'></Avatar>
                    <div className='card-text'>
                        <h4>{title}</h4>
                        <p>{creator.username}</p>
                        <p>
                            {viewCount} Views * {created_at}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VideoIndexItem);