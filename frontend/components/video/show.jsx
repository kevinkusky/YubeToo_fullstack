import React from 'react';

import TopNav from '../navs/topnav';
import CommentForm from '../interactions/comment_form';
// import Likes from './likes';
// import CommentIndex from './comment_index';

class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videoId: this.props.videoId,
            video: this.props.videos[this.props.videoId]
        };
    }

    // componentDidMount(){
    //     this.props.fetchVideo(this.state.videoId).then(
    //         res => this.setState({video: res})
    //     );
    // }

    render(){
        console.log(`I am video ${this.props.videoId}`);
        // debugger;
        const {views, uploadDate, title, videoUrl, comments, likes } = this.state.video;
        // debugger
        return (
          <div>
            <TopNav />
            <div className="video-show">
              <div className="video">
                <video src={videoUrl} controls></video>
              </div>
              <div className="video-details">
                {title}
                <div className="video-stats">
                  {views}
                  {uploadDate}
                  {/* <LikeContainer likes={likes}/> */}
                </div>
              </div>
              <div className="comments">
                <CommentForm formType='create'/>
                {/* <CommentIndex comments={comments} /> */}
              </div>
            </div>
          </div>
        );
    }
}

export default VideoShow;