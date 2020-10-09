import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { entityAsArray } from "../../reducers/selectors";
import {editLike, createLike, deleteLike, fetchCommentLikes, fetchVideoLikes} from '../../actions/likes';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

class Likes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeType: this.props.contentType,
      contentId: this.props.contentId,
      likes: this.props.allLikes.likes,
      dislikes: this.props.allLikes.dislikes,
      currentLike: Object.values(this.props.allLikes).filter(
          like => like.liker_id === this.props.currentUserId
      ),
      userStatus: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
      this.state.likeType === 'Video' ?
        this.props.fetchVideoLikes(this.state.contentId) :
        this.props.fetchCommentLikes(this.state.contentId);
    console.log(this.state);
    console.log(this.props);
    if (this.state.currentLike.length > 0) { this.setState({ userStatus: true }); }
  }

  componentDidUpdate(preProps, preState) {
      if (this.state.currentLike.length > 0) { 
        this.setState({ userStatus: true });
      }
    //   console.log(this.props.likes);
    // if (
    //   preProps.allLikes.likes.length !== this.props.allLikes.likes.length ||
    //   preProps.allLikes.dislikes.length !== this.props.allLikes.dislikes.length
    // ) {
    //   this.setState({
    //     likes: this.props.allLikes.likes,
    //     dislikes: this.props.allLikes.dislikes,
    //     currentLike: Object.values(this.props.allLikes).filter(
    //       (like) => like.liker_id === this.props.currentUser.id
    //     ),
    //   });
    // }

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
    switch (this.state.userStatus) {
      case false:
          this.props.createLike(newLike);
          this.setState({ userStatus: true, currentLike: newLike });
        break;
      case true:
        // if deleting existing like
        if (!this.state.currentLike[0].dislike && !newLike.dislike) {
          this.props.deleteLike(this.state.currentLike[0].id);
          this.setState({ currentLike: {}, userStatus: false });
        } 
        // if deleting existing dislike
        else if (this.state.currentLike[0].dislike && newLike.dislike) {
          this.props.deleteLike(this.state.currentLike[0].id);
          this.setState({ currentLike: {}, userStatus: false });
        }
        // if changing between like and dislike
        else {
            newLike.id = this.state.currentLike[0].id;
            this.props.editLike(newLike);
            this.setState({ currentLike: newLike });
        }
        break;
      default:
        return null;
    }
  }

  render() {
    // console.log(this.state);
    const activeLikeClass = (
        this.state.currentLike.length > 0 && 
        !this.state.currentLike.dislike) ? 
            "active-like" : "inactive-like";

    const activeDislikeClass = (
        this.state.currentLike.length > 0 && 
        this.state.currentLike.dislike) ? 
            "active-like" : "inactive-like";

    return(
      <div className="like-container">
        <div className={`like-item ${activeLikeClass}`}>
          <UpIcon
            className="like-icon"
            onClick={() => this.handleClick("like")}
          />
          <span>{this.state.likes.length}</span>
        </div>
        <div className={`like-item ${activeDislikeClass}`}>
          <DownIcon
            className="like-icon"
            onClick={() => this.handleClick("dislike")}
          />
          <span>{this.state.dislikes.length}</span>
        </div>

      </div>
    );
  }
}

const mSTP = ({ entities: { likes }, session: { currentUser } }) => ({
  currentUserId: currentUser ? currentUser.id : null,
  allLikes: {
      likes: Object.values(likes).filter(
        like => like.dislike === false
      ),
      dislikes: Object.values(likes).filter(
        like => like.dislike === true
      ),
  }
});

const mDTP = dispatch => ({
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
    createLike: like => dispatch(createLike(like)),
    editLike: like => dispatch(editLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
});

export default withRouter(connect(mSTP, mDTP)(Likes));