import { RECEIVE_LIKES, REMOVE_LIKE } from '../../actions/likes';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_LIKES:
            return action.likes;
        case REMOVE_LIKE:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default likesReducer;