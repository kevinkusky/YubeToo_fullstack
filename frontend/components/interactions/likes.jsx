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

        // let formData = new FormData();
        // formData.append("like[liker_id]", this.props.currentUser.id);
        // formData.append("like[likeable_type]", this.props.contentType);
        // formData.append("like[likeable_id]", this.props.contentId);

        // let dislikeStatus;
        // if(type === "like"){ 
        //     // dislikeStatus = {dislike: false};
        //     formData.append("like[dislike]", false); 
        //     // formData.append("like[dislike]", JSON.stringify(dislikeStatus[dislike]));
        // } else { 
        //     // dislikeStatus = {dislike: true};
        //     formData.append("like[dislike]", true);
        //     // formData.append("like[dislike]", JSON.stringify(dislikeStatus[dislike]));
        // }

        this.props.createLike(newLike);
        // reads formData in console for testing
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }
    }

    render() {
        const {likes, dislikes} = this.props.allLikes;
        return (
          <div className="like-container">
            <div className="like-item">
              <UpIcon
                className="like-icon"
                onClick={() => this.handleClick('like')}
              />
              <span>{likes.length}</span>
            </div>
            <div className="like-item">
              <DownIcon
                className="like-icon"
                onClick={() => this.handleClick('dislike')}
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