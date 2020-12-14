import React from 'react';
import { connect } from "react-redux";

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
    this.createLike = this.createLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
    this.editLike = this.editLike.bind(this);
  }

  componentDidMount(){
      let allLikes = this.props.likes.concat(this.props.dislikes);

      this.setState({
          activeLike: allLikes.filter(
              like => like.liker_id === this.props.currentUserId
          )
      });
  }

  componentDidUpdate(preProps, preState) {
      if(this.props.activeLike.length === 0){
          return null;
      }else if(preProps.activeLike.length !== this.props.activeLike.length){
            this.setState({ activeLike: this.props.activeLike });
      }else if((preProps.likes.length !== this.props.likes.length) || 
        (preProps.dislikes.length !== this.props.dislikes.length)){
            this.setState({ likes: this.props.likes, dislikes: this.props.dislikes});
      } else if(preProps.activeLike[0].dislike !== this.props.activeLike[0].dislike){
            this.setState({ activeLike: this.props.activeLike });
      }
  }

  createLike(like){
      this.props.createLike(like);
      (!like.dislike && this.props.activeLike.length === 0) ?
        this.setState({ 
            activeLike: [like],
            likes: this.props.likes.push(like) 
        }) :
        this.setState({
             activeLike: [like],
             dislikes: this.props.dislikes.push(like) 
        });
  }

  deleteLike(like){
      this.props.deleteLike(this.props.activeLike[0].id);

      !like.dislike ?
      this.setState({ 
          activeLike: [],
          likes: this.props.likes.filter(
              like => like.id !== this.props.activeLike[0].id
            )
        }) :
        this.setState({ 
            activeLike: [],
            dislikes: this.props.dislikes.filter(
                like => like.id !== this.props.activeLike[0].id
            )
        })
  }

  editLike(like){
    like.id = this.props.activeLike[0].id;
    this.props.editLike(like);
    !like.dislike ?
        this.setState({ 
            activeLike: [like],
            likes: this.props.likes.push(like),
            dislikes: this.props.dislikes.filter(
                like => like.id !== this.props.activeLike[0].id
            )
        }) :
        this.setState({
             activeLike: [like],
             dislikes: this.props.dislikes.push(like),
             likes: this.props.likes.filter(
                like => like.id !== this.props.activeLike[0].id
            ) 
        });
  }

  likeActionDirector(like){
    switch (this.state.activeLike.length === 0) {
        case true:
            this.createLike(like);
            break;
        case false:
            // if deleting existing like/dislike
            if ((!this.props.activeLike[0].dislike && !like.dislike) ||
              (this.props.activeLike[0].dislike && like.dislike)) {
                this.deleteLike(like);
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

    const newLike = {
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
        this.state.activeLike.length > 0 && !this.state.activeLike[0].dislike
    ) ? "active-like" : "inactive-like";

    const activeDislikeClass = (
        this.state.activeLike.length > 0 && this.state.activeLike[0].dislike
    ) ? "active-like" : "inactive-like";

    let likeCount = () => {
        if(this.props.likes.length > this.state.likes.length){
            return this.props.likes.length;
        }else return this.state.likes.length;
    };

    let dislikeCount = () => {
        if(this.props.dislikes.length > this.state.dislikes.length){
            return this.props.dislikes.length;
        }else return this.state.dislikes.length;
    };

    return(
      <div className="like-container">
        <div 
            className={`like-item ${activeLikeClass}`}
            onClick={() => this.handleClick("like")}
        >
          <UpIcon className="like-icon" />
          <span>{likeCount()}</span>
        </div>
        <div 
            className={`like-item ${activeDislikeClass}`}
            onClick={() => this.handleClick("dislike")}
        >
          <DownIcon className="like-icon" />
          <span>{dislikeCount()}</span>
        </div>

      </div>
    );
  }
}

const mSTP = ({ session }) => ({
    currentUserId: session.currentUser ? session.currentUser.id : null,
});

const mDTP = dispatch => ({
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
    createLike: like => dispatch(createLike(like)),
    editLike: like => dispatch(editLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
});

export default connect(mSTP, mDTP)(Likes);