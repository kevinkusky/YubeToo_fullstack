import React from 'react';
import ReactPlayer from 'react-player';

import TopNav from '../navs/topnav';
// import Likes from './likes';
// import Comments from './comments';


class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            video: null
        };
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId).then(
            res => this.setState({video: res})
        );
    }

    render(){
        console.log(this);
        return(
            <div>
                <TopNav />
                <div className='video-show'>
                    <span>I am video {this.props.videoId}</span>
                    <div className='video'>
                        {/* <ReactPlayer /> */}
                    </div>
                    <div className='video-details'>
                        {/* <LikeContainer /> */}
                    </div>
                    <div className='comments'>
                        {/* <CommentIndex /> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default VideoShow;