import React from 'react';
import ReactPlayer from 'react-player';

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
        // const videoId = this.state.ownProps.match.params.videoId;
        console.log(this);
        return(
            <div className='video-show'>
                <span>
                I am video {this.props.videoId}
                </span>
            </div>
        )
    }
}

export default VideoShow;