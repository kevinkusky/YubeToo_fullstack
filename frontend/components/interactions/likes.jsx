import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {editLike, createLike} from '../../actions/likes';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

class Likes extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(type){
        if(!this.props.currentUser){return null;}

        let newLike = {
          liker_id: this.props.currentUser.id,
          likeable_type: this.props.contentType,
          likeable_id: this.props.contentId,
          dislike: type === "like" ? false : true,
        };

        this.props.createLike(newLike);
    }

    render() {
        const {likes, dislikes} = this.props.allLikes;
        // console.log(likes[0]);
        // console.log(this.props.currentUser.id);
        // console.log(dislikes.filter(
        //     like => like.liker_id === this.props.currentUser.id
        // ));
        let dislikeStatus = dislikes.filter(
          (dislike) => dislike.liker_id === this.props.currentUser.id
        );

        let likeStatus = likes.filter(
            (like) => like.liker_id === this.props.currentUser.id
        );

        const activeLikeClass = likeStatus.length > 0 ? 'active-like' : 'inactive-like';

        const activeDislikeClass = dislikeStatus.length === 1 ? 'active-like' : 'inactive-like';
    
        return (
          <div className="like-container">
            <div className={`like-item ${activeLikeClass}`}>
              <UpIcon
                className='like-icon'
                onClick={() => this.handleClick("like")}
              />
              <span>{likes.length}</span>
            </div>
            <div className={`like-item ${activeDislikeClass}`}>
              <DownIcon
                className='like-icon'
                onClick={() => this.handleClick("dislike")}
              />
              <span>{dislikes.length}</span>
            </div>
          </div>
        );
    }
}

const mSTP = (state) => ({
  currentUser: state.session.currentUser ? state.session.currentUser : null,
});

const mDTP = dispatch => ({
    createLike: form => dispatch(createLike(form)),
    editLike: form => dispatch(editLike(form)),
});

export default withRouter(connect(mSTP, mDTP)(Likes));
// export default withRouter(Likes);