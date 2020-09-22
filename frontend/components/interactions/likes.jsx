import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {editLike, createLike, deleteLike} from '../../actions/likes';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

class Likes extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            likeStatus: this.props.likes.filter(
                like => like.liker_id === this.props.currentUser.id
            ).length > 0,
            dislikeStatus: this.props.dislikes.filter(
                like => like.liker_id === this.props.currentUser.id
            ).length > 0,
            userStatus: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if (this.state.likeStatus || this.state.dislikeStatus) {
            this.setState({ userStatus: true });
        }
    }

    handleClick(type){
        if(!this.props.currentUser){return null;}

        let newLike = {
          liker_id: this.props.currentUser.id,
          likeable_type: this.props.contentType,
          likeable_id: this.props.contentId,
          dislike: type === "like" ? false : true,
        };

        switch(this.state.userStatus){
            case(false):
                this.setState({userStatus: true});
                this.props.createLike(newLike);
                break;
            case(true):
                const existingLike = this.state.likeStatus ? 
                    this.state.likes.filter(like => like.liker_id === this.props.currentUser.id) :
                    this.state.dislikes.filter(like => like.liker_id === this.props.currentUser.id);
                    
                    console.log(existingLike);
                    console.log(existingLike[0]);
                    console.log(existingLike[0].id);
                    // console.log(existingLike[0].dislike);
            
                if (this.state.likeStatus && !newLike.dislike) {
                    this.setState({ likeStatus: false});
                    this.props.deleteLike(existingLike[0].id);
                } else if ( this.state.dislikeStatus && newLike.dislike) {
                    this.setState({ dislikeStatus: false});
                    this.props.deleteLike(existingLike[0].id);
                } else {
                    newLike.dislike ? 
                        this.setState({ dislikeStatus: true, likeStatus: false }) : 
                        this.setState({ likeStatus: true, dislikeStatus: false })
                    ;
                    
                    newLike.id = existingLike[0].id;
                    this.props.editLike(newLike);
                }
                break;
            default: 
                return null;
        }
    }

    render() {
        console.log(this.state);

        const activeLikeClass = this.state.likeStatus ? 'active-like' : 'inactive-like';
        const activeDislikeClass = this.state.dislikeStatus ? 'active-like' : 'inactive-like';
    
        return (
          <div className="like-container">
            <div className={`like-item ${activeLikeClass}`}>
              <UpIcon
                className='like-icon'
                onClick={() => this.handleClick("like")}
              />
              <span>{this.state.likes.length}</span>
            </div>
            <div className={`like-item ${activeDislikeClass}`}>
              <DownIcon
                className='like-icon'
                onClick={() => this.handleClick("dislike")}
              />
              <span>{this.state.dislikes.length}</span>
            </div>
          </div>
        );
    }
}

const mSTP = (state) => ({
  currentUser: state.session.currentUser ? state.session.currentUser : null,
  userLikes: state.session.currentUser.userLikes
});

const mDTP = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    editLike: like => dispatch(editLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
});

export default withRouter(connect(mSTP, mDTP)(Likes));
