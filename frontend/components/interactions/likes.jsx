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
        likes: this.props.likes,
        dislikes: this.props.dislikes,
        activeLike: this.props.activeLike
    };

    this.handleClick = this.handleClick.bind(this);
    this.likeActionDirector = this.likeActionDirector.bind(this);
  }

  componentDidUpdate(preProps, preState) {
      if(this.props.activeLike.length === 0){
          return null;
      }else if(preProps.likes.length !== this.props.likes.length || 
        preProps.dislikes.length !== this.props.dislikes.length){
            this.setState({ likes: this.props.likes, dislikes: this.props.dislikes});
      }else if(preProps.activeLike.length !== this.props.activeLike.length){
            this.setState({ activeLike: this.props.activeLike });
        } else if(preProps.activeLike[0].dislike !== this.props.activeLike[0].dislike){
            this.setState({ activeLike: this.props.activeLike });
        }
  }

  createLike(like){
      this.props.createLike(like);
      this.setState({ activeLike: [like] });
  }

  deleteLike(){
      this.props.createLike(this.props.activeLike[0].id);
      this.setState({ activeLike: [] });
  }

  editLike(like){
    like.id = this.props.activeLike[0].id;
    this.props.editLike(like);
    this.setState({ activeLike: [like] });
  }

  likeActionDirector(like){
    switch (this.props.activeLike.length === 1) {
        case false:
            this.createLike(like);
            break;
        case true:
            // if deleting existing like/dislike
            if (!this.props.activeLike[0].dislike && !like.dislike ||
              this.props.activeLike[0].dislike && like.dislike) {
                this.deleteLike();
            }
            // if changing between like and dislike
            else {
                this.editLike(like);
            }
            break;
        default:
            return null;
        }
  }

  handleClick(type) {
    if (!this.props.currentUserId) { return null; }

    let newLike = {
      liker_id: this.props.currentUserId,
      likeable_type: this.props.contentType,
      likeable_id: this.props.contentId,
      dislike: type === "like" ? false : true,
    };
    // debugger
    this.likeActionDirector(newLike);
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
          <span>{this.state.likes.length}</span>
        </div>
        <div 
            className={`like-item ${activeDislikeClass}`}
            onClick={() => this.handleClick("dislike")}
        >
          <DownIcon className="like-icon" />
          <span>{this.state.dislikes.length}</span>
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