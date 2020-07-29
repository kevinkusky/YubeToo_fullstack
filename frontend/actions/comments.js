import * as APIUtil from '../util/comments_util';
import { RECEIVE_VIDEOS } from './video';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comments
});

const removeComment = () => ({
    type: REMOVE_COMMENT,
});

export const fetchComments = () => dispatch => (
    APIUtil.fetchComments().then(
        comments => dispatch(receiveComments(comments))
    )
);

export const fetchComment = id => dispatch => (
    APIUtil.fetchComment(id).then(
        comment => dispatch(receiveComment(comment))
    )
);

export const createComments = form => dispatch => (
    APIUtil.createComment(form).then(
        comment => dispatch(receiveComment(comment))
    )
);

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