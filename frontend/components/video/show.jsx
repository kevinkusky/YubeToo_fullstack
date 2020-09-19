import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {withRouter} from 'react-router-dom';

import TopNav from '../navs/topnav';
import CommentForm from '../interactions/comment_form';
import Likes from '../interactions/likes';
// import CommentIndex from './comment_index';

import UserIcon from "@material-ui/icons/AccountCircle";
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
        // ensures reloading on refresh
        this.props.fetchVideo(this.props.videoId).then(
            res => this.setState({video: res.video})
        );
    }

    render(){
        console.log(this.state.video);
        // debugger;
        if (!this.state.video){return null;}

        const {views, uploadDate, title, videoUrl, comments, likes, dislikes, creatorName, description, totalComments} = this.state.video;

        // packages likes to pass as singular prop for consistancy with displayed comment likes
        const likeObject = {
            likes: likes,
            dislikes: dislikes
        };
        
        // constant creates sharable url for user to share video
        const shareURL = `yubetoo-aa.herokuapp.com/#/videos/show/${this.state.video.id}`;

        const formatTotalComments = totalComments === 1 ? '1 Comment' : `${totalComments} Comments`; 

        return (
          <div>
            <TopNav />
            <div className="video-show">
              <div className="video">
                <video src={videoUrl} controls alt={`video is ${title}`}></video>
              </div>
              <div className="video-details">
                <h2>{title} </h2>
                <div className="video-stats">
                  <div className="left-stats">
                    <span>{`${views} views`}</span>
                    <span>•</span>
                    <span>{uploadDate}</span>
                  </div>
                  <div className="right-stats">
                    <Likes 
                        allLikes={likeObject}
                        contentType='video'
                        contentId={this.props.videoId}
                    />
                    <CopyToClipboard
                      text={shareURL}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <button className="share-button">
                        <ShareIcon className="share-icon" />
                        <span className="share-text">SHARE</span>
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className="uploader-details">
                <div className="top-info">
                  <UserIcon className="drop-header-icon" />
                  <div className="name-n-number">
                    <h4>{creatorName}</h4>
                    {/* <span>{subCount}</span> */}
                  </div>
                  {/* <button>SUBSCRIBE</button> */}
                </div>
                <div className="description">{description}</div>
              </div>
              <div className="comments">
                <h4>{formatTotalComments}</h4>
                <CommentForm formType="create" />
                {/* <CommentIndex comments={comments} /> */}
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(VideoShow);