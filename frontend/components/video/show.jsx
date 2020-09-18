import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {withRouter} from 'react-router-dom';

import TopNav from '../navs/topnav';
import CommentForm from '../interactions/comment_form';
// import Likes from './likes';
// import CommentIndex from './comment_index';

import ShareIcon from "@material-ui/icons/Redo";

class VideoShow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            video: this.props.video ? this.props.video : null,
            copied: false
        };
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId).then(
            res => this.setState({video: res.video})
        );
    }

    // componentDidUpdate(){
    //     this.props.video ? null : () => (
    //         this.props.fetchVideo(this.props.videoId).then(
    //             res => this.setState({video: res})
    //         );
    //     );
    // }

    render(){
        console.log(this.state.video);
        // debugger;
        if (!this.state.video){return null;}

        const {views, uploadDate, title, videoUrl, comments, likes} = this.state.video;
        const shareURL = `yubetoo-aa.herokuapp.com/#/videos/show/${this.state.video.id}`;
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
                  <div className="left-stats">
                    {views} • {uploadDate}
                  </div>
                  <div className='right-stats'>
                    {/* <LikeContainer likes={likes}/> */}
                    <CopyToClipboard
                        text={shareURL}
                        onCopy={ () => this.setState({copied: true})}
                    >
                        <button className='share-button'>
                            <ShareIcon className='share-icon' />
                            <span className='share-text'>SHARE</span>
                        </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className="comments">
                <CommentForm formType="create" />
                {/* <CommentIndex comments={comments} /> */}
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(VideoShow);