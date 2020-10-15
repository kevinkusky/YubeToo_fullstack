import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../../actions/comments';
// import { REMOVE_LIKE, RECEIVE_LIKE, RECEIVE_COMMENT_LIKES } from "../../actions/likes";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
      case RECEIVE_COMMENTS:
        return action.comments;
      case RECEIVE_COMMENT:
        const newComment = { [action.comment.id]: action.comment };
        return Object.assign({}, state, newComment);
      case REMOVE_COMMENT:
        const newState = Object.assign({}, state);
        delete newState[action.id];
        return newState;
    //   case RECEIVE_COMMENT_LIKES:
    //     if (!action.likeable.videoUrl) {
    //         return Object.assign({}, state, {[action.likeable.id]: action.likeable});
    //     }
    //     return state;
    //   case REMOVE_LIKE:
    //     if (!action.likeable.videoUrl) {
    //         return Object.assign({}, state, {[action.likeable.id]: action.likeable});
    //     }
    //     return state;
      default:
        return state;
    }
};

export default commentsReducer;