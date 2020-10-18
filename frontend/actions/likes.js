import * as APIUtil from '../util/likes_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_VIDEO_LIKES = "RECEIVE_LIKES";
export const RECEIVE_COMMENT_LIKES = "RECEIVE_LIKES";

const receiveVideoLikes = (likes) => {
    // debugger
    return({
        type: RECEIVE_VIDEO_LIKES,
        likes,
    });
};

const receiveCommentLikes = (likes) => {
    // debugger
    return({
        type: RECEIVE_COMMENT_LIKES,
        likes,
    });
};

const receiveLike = (like) => {
    // debugger
    return({
        type: RECEIVE_LIKE,
        like
    });
};

const removeLike = () => ({
    type: REMOVE_LIKE
});

export const fetchVideoLikes = (videoId) => (dispatch) =>
  APIUtil.fetchVideoLikes(videoId).then((likes) =>
    dispatch(receiveVideoLikes(likes))
  );

export const fetchCommentLikes = (commentId) => (dispatch) =>
  APIUtil.fetchCommentLikes(commentId).then((likes) =>
    dispatch(receiveCommentLikes(likes))
  );

export const fetchLike = id => dispatch => (
    APIUtil.fetchLike(id).then(
        like => dispatch(receiveLike(like))
    )
);

export const createLike = like => dispatch => (
    APIUtil.createLike(like).then(
        like => dispatch(receiveLike(like))
    )
);

export const editLike = like => dispatch => (
    APIUtil.editLike(like).then(
        like => dispatch(receiveLike(like))
    )
);

export const deleteLike = id => dispatch => (
    APIUtil.removeLike(id).then(
        () => dispatch(removeLike())
    )
);