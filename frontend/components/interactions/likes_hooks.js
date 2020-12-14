import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { editLike, createLike, deleteLike, fetchCommentLikes, fetchVideoLikes } from '../../actions/likes';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

const Likes = ({ currentUserId, contentType, contentId, 
    likes, dislikes, activeLike, editLike, createLike, deleteLike }) => {

    const [activeLike, setActiveLike] = useState([]);
    const [likes, setAllLikes] = useState([...likes]);
    const [dislikes, setAllDislikes] = useState([...dislikes]);

    const createLike = newLike =>{
        createLike(newLike);

        setActiveLike([newLike]);

        !newLike.dislike ? setAllLikes([...likes, newLike]) : setAllDislikes([...dislikes, newLike]);
    };

    const editLike = editedLike => {
        editedLike.id = activeLike[0].id;

        editLike(editedLike);

        !like.dislike ?
            setActiveLike([editedLike]) && 
            setAllLikes([...likes, editedLike]) &&
            setAllDislikes(dislikes.filter(
                like => like.id !== editedLike.id
            )) :
            setActiveLike([editedLike]) && 
            setAllDislikes([...dislikes, editedLike]) &&
            setAllLikes(likes.filter(
                like => like.id !== editedLike.id
            )); 
    };

    const deleteLike = deletedLike => {
        deleteLike(activeLike[0].id);

        !deletedLike.dislike ?
            setAllLikes(likes.filter(
                like => like.id !== activeLike[0].id
            )) :
            setAllDislikes(dislikes.filter(
                like => like.id !== activeLike[0].id
            ));

        setActiveLike([]);
    };

    const likeActionDirector = like => {
        switch(activeLike.length === 0) {
            case true:
                createLike(like);
                break;
            case false:
                if((!activeLike[0].dislike && !like.dislike) ||
                (activeLike[0].dislike && like.dislike)){
                    deleteLike(like);
                } else {
                    editLike(like);
                }
                break;
            default:
                return null;
        }
    };

    const handleClick = clickType => {
        if (!currentUserId) return null;

        const newLike = {
            liker_id: currentUserId,
            likeable_type: contentType,
            likeable_id: contentId,
            dislike: clickType === 'like' ? false : true,
        };

        likeActionDirector(newLike);
    };

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