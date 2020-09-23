import {RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from '../../actions/likes';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default likesReducer;