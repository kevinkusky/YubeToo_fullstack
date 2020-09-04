import React from 'react';
import ReactPlayer from 'react-player';

import TopNav from '../navs/topnav';
// import Likes from './likes';
// import Comments from './comments';


class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            video: this.props.video,
            runtime: ''
        };

        // this.videoTime = this.videoTime.bind(this);
    }


    // componentDidMount(){
    //     this.videoTime();
    // }
    // componentDidUpdate(){
    //     if(this.state.video === null){
    //         this.props.fetchVideo(this.props.videoId).then(
    //             res => this.setState({video: res})
    //         );
    //     }
    // }

    // videoTime(){
    //     const { getVideoDurationInSeconds } = require('get-video-duration');
    //     const fs = require('fs');
    //     const stream = fs.createReadStream(`${this.state.video}`);
    //     getVideoDurationInSeconds(stream).then(
    //         duration => this.setState({runtime: duration})
    //     );
    // }

    // timeFormat(time){
    //     switch(time)
    // }

    render(){
        // debugger
        // console.log(this.state);
        const {views, uploadDate, title } = this.state.video;
        // debugger
        return(
            <div>
                <TopNav />
                <div className='video-show'>
                    <span>I am video {this.props.videoId}</span>
                    <div className='video'>
                        {/* <ReactPlayer /> */}
                    </div>
                    <div className='video-details'>
                        {title}
                        <div className='video-stats'>
                            {views}
                            {uploadDate}
                            {/* <LikeContainer /> */}
                        </div>
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