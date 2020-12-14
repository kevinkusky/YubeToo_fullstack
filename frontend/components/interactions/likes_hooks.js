import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { editLike, createLike, deleteLike, fetchCommentLikes, fetchVideoLikes } from '../../actions/likes';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

const Likes = ({ currentUserId, contentType, contentId, likes, dislikes, activeLike, editLike, createLike, deleteLike }) => {

    const [activeLikeCont, setActiveLike] = useState([activeLike]);
    const [allLikes, setAllLikes] = useState([...likes]);
    const [allDislikes, setAllDislikes] = useState([...dislikes]);

    const createALike = newLike =>{
        createLike(newLike);

        setActiveLike([newLike]);

        !newLike.dislike ? setAllLikes([...allLikes, newLike]) : setAllDislikes([...allDislikes, newLike]);
    };

    const editALike = editedLike => {
        editedLike.id = activeLikeCont[0].id;

        console.log(activeLike);
        console.log(editedLike);

        // edited id undefined, patch request fails
        editLike(editedLike);

        !like.dislike ?
            setActiveLike([editedLike]) && 
            setAllLikes([...allLikes, editedLike]) &&
            setAllDislikes(allDislikes.filter(
                like => like.id !== editedLike.id
            )) :
            setActiveLike([editedLike]) && 
            setAllDislikes([...allDislikes, editedLike]) &&
            setAllLikes(allLikes.filter(
                like => like.id !== editedLike.id
            )); 
    };

    const deleteALike = deletedLike => {
        deleteLike(activeLikeCont[0].id);

        !deletedLike.dislike ?
            setAllLikes(allLikes.filter(
                like => like.id !== activeLike[0].id
            )) :
            setAllDislikes(allDislikes.filter(
                like => like.id !== activeLike[0].id
            ));

        setActiveLike([]);
    };

    const likeActionDirector = like => {
        switch(activeLikeCont.length === 0) {
            case true:
                createALike(like);
                break;
            case false:
                if((!activeLikeCont[0].dislike && !like.dislike) ||
                (activeLikeCont[0].dislike && like.dislike)){
                    deleteALike(like);
                } else {
                    editALike(like);
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
        activeLikeCont.length > 0 && !activeLikeCont[0].dislike
    ) ? "active-like" : "inactive-like";

    const activeDislikeClass = (
        activeLikeCont.length > 0 && activeLikeCont[0].dislike
    ) ? "active-like" : "inactive-like";

    return(
        <div className="like-container">
            <div
                className={`like-item ${activeLikeClass}`}
                onClick={() => handleClick("like")}
            >
                <UpIcon className="like-icon" />
                <span>{allLikes.length}</span>
            </div>
            <div
                className={`like-item ${activeDislikeClass}`}
                onClick={() => handleClick("dislike")}
            >
                <DownIcon className="like-icon" />
                <span>{allDislikes.length}</span>
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