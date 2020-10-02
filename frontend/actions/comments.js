import * as APIUtil from '../util/comments_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
// export const RECEIVE_REPLY = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

// const receiveReply = comment => ({
//     type: RECEIVE_REPLY,
//     comment
// });

const removeComment = () => ({
    type: REMOVE_COMMENT,
});

export const fetchVideoComments = videoId => dispatch => (
    APIUtil.fetchComments(videoId).then(
        comments => dispatch(receiveComments(comments))
    )
);

export const fetchComment = id => dispatch => (
    APIUtil.fetchComment(id).then(
        comment => dispatch(receiveComment(comment))
    )
);

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(
        comment => dispatch(receiveComment(comment))
    )
);

// export const createReply = comment => dispatch => (
//     APIUtil.createComment(comment).then(
//         comment => dispatch(receiveReply(comment))
//     )
// );

export const editComment = comment => dispatch => (
    APIUtil.editComment(comment).then(
        comment => dispatch(receiveComment(comment))
    )
);

export const deleteComment = id => dispatch => (
    APIUtil.removeComment().then(
        () => dispatch(removeComment())
    )
);