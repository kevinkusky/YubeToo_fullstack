import {RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from '../actions/likes';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            const newLike = { [action.like.id]: action.like };
            return Object.assign({}, state, newLike);
        case Remove_Like:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default likesReducer;