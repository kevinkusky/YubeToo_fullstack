import {REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENTS} from '../actions/comments';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            const newComment = { [action.comment.id]: action.comment };
            return Object.assign({}, state, newComment);
        case REMOVE_COMMENT:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;