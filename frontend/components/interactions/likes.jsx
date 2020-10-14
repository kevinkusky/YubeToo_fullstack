import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {editLike, createLike, deleteLike, fetchCommentLikes, fetchVideoLikes} from '../../actions/likes';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

class Likes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        // likeCount: this.props.likes.length,
        // dislikeCount: this.props.dislikes.length,
        // activeLike: this.props.activeLike
    };

    this.handleClick = this.handleClick.bind(this);
  }

//   componentDidMount() {
//       this.state.likeType === 'Video' ?
//         this.props.fetchVideoLikes(this.state.contentId) :
//         this.props.fetchCommentLikes(this.state.contentId);

//     if (this.state.activeLike.length > 0) { this.setState({ userStatus: true }); }
//   }

//   componentDidUpdate() {
//         this.props.contentType === 'Video' ?
//         this.props.fetchVideoLikes(this.props.contentId) :
//         this.props.fetchCommentLikes(this.props.contentId);
//   }

  handleClick(type) {
    if (!this.props.currentUserId) { return null; }

    let newLike = {
      liker_id: this.props.currentUserId,
      likeable_type: this.props.contentType,
      likeable_id: this.props.contentId,
      dislike: type === "like" ? false : true,
    };

    // debugger

    switch (this.props.activeLike.length === 1) {
      case false:
          this.props.createLike(newLike);
        //   this.setState({ activeLike: [newLike] });
        break;
      case true:
        // if deleting existing like
        if (!this.props.activeLike[0].dislike && !newLike.dislike) {
          this.props.deleteLike(this.props.activeLike[0].id);
        //   this.setState({ activeLike: [] });
        } 
        // if deleting existing dislike
        else if (this.props.activeLike[0].dislike && newLike.dislike) {
          this.props.deleteLike(this.props.activeLike[0].id);
          this.setState({ activeLike: [] });
        }
        // if changing between like and dislike
        else {
            newLike.id = this.props.activeLike[0].id;
            this.props.editLike(newLike);
            // this.setState({ activeLike: [newLike] });
        }
        break;
      default:
        return null;
    }
  }

  render() {
    // console.log(this.state);
    const activeLikeClass = (
        this.props.activeLike.length > 0 && !this.props.activeLike[0].dislike
    ) ? "active-like" : "inactive-like";

    const activeDislikeClass = (
        this.props.activeLike.length > 0 && this.props.activeLike[0].dislike
    ) ? "active-like" : "inactive-like";

    return(
      <div className="like-container">
        <div 
            className={`like-item ${activeLikeClass}`}
            onClick={() => this.handleClick("like")}
        >
          <UpIcon className="like-icon" />
          <span>{this.props.likes.length}</span>
          {/* <span>{this.state.likeCount}</span> */}
        </div>
        <div 
            className={`like-item ${activeDislikeClass}`}
            onClick={() => this.handleClick("dislike")}
        >
          <DownIcon className="like-icon" />
          <span>{this.props.dislikes.length}</span>
          {/* <span>{this.state.dislikeCount}</span> */}
        </div>

      </div>
    );
  }
}

const mSTP = ({ session }) => ({
    currentUserId: session.currentUser.id
});

const mDTP = dispatch => ({
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
    createLike: like => dispatch(createLike(like)),
    editLike: like => dispatch(editLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
});

export default connect(mSTP, mDTP)(Likes);