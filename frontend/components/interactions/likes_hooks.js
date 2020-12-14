import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { editLike, createLike, deleteLike, fetchCommentLikes, fetchVideoLikes } from '../../actions/likes';


import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

const Likes = ({ editLike, createLike, deleteLike, likes, dislikes, activeLike }) => {

    const [activeLike, setActiveLike] = useState([activeLike]);
    const [likes, setAllLikes] = useState([...likes]);
    const [dislikes, setAllDislikes] = useState([...dislikes]);


    const handleClick = clickType => {

        const newLike = {
            liker_id: 1,
            likeable_type: contentType,
            likeable_id: contentId,
            dislike: clickType === 'like' ? false : true,
        }

        likeActionDirector(newLike);
    }

    const activeLikeClass = (
        activeLike.length > 0 && !activeLike[0].dislike
    ) ? "active-like" : "inactive-like";

    const activeDislikeClass = (
        activeLike.length > 0 && activeLike[0].dislike
    ) ? "active-like" : "inactive-like";

    return(
        <div className="like-container">
            <div
                className={`like-item ${activeLikeClass}`}
                onClick={() => handleClick("like")}
            >
                <UpIcon className="like-icon" />
                <span>{likes.length}</span>
            </div>
            <div
                className={`like-item ${activeDislikeClass}`}
                onClick={() => handleClick("dislike")}
            >
                <DownIcon className="like-icon" />
                <span>{dislikes.length}</span>
            </div>

        </div>
    );
};

const mDTP = dispatch => ({
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId)),
    fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
    createLike: like => dispatch(createLike(like)),
    editLike: like => dispatch(editLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
});

export default connect(null, mDTP)(Likes);