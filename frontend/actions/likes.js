import * as APIUtil from '../util/likes_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = () => ({
    type: REMOVE_LIKE
});

export const fetchLikes = () => dispatch => (
    APIUtil.fetchLikes().then(
        likes => dispatch(receiveLikes(likes))
    )
);

export const fetchLike = id => dispatch => (
    APIUtil.fetchLike(id).then(
        like => dispatch(receiveLike(like))
    )
);

export const createLike = form => dispatch => (
    APIUtil.createLike(form).then(
        like => dispatch(receiveLike(like))
    )
);

export const editLike = like => dispatch => (
    APIUtil.editLike(like).then(
        like => dispatch(receiveLike(like))
    )
);

export const deleteLike = id => dispatch => (
    APIUtil.deleteLike().then(
        () => dispatch(removeLike())
    )
);