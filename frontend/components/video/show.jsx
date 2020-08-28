import React from 'react';
import ReactPlayer from 'react-player';

// import Likes from './likes';
// import Comments from './comments';


class VideoShow extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.fetchVideo();
    // }

    render(){
        // const videoId = this.state.ownProps.match.params.videoId;
        return(
            <div className='video-show'>
                <span>
                I am video 
                </span>
            </div>
        )
    }
}

export default VideoShow;