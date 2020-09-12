import React from 'react';

import TopNav from '../navs/topnav';
// import Likes from './likes';
// import CommentIndex from './comment_index';

class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            video: this.props.video,
        };
    }

    render(){
        console.log(this.state);
        // debugger
        const {views, uploadDate, title, videoUrl, comments } = this.state.video;
        // debugger
        return (
          <div>
            <TopNav />
            <div className="video-show">
              <span>I am video {this.props.videoId}</span>
              <div className="video">
                <video src={videoUrl}></video>
              </div>
              <div className="video-details">
                {title}
                <div className="video-stats">
                  {views}
                  {uploadDate}
                  {/* <LikeContainer /> */}
                </div>
              </div>
              <div className="comments">
                {/* <NewCommentForm /> */}
                {/* <CommentIndex comments={comments} /> */}
              </div>
            </div>
          </div>
        );
    }
}

export default VideoShow;