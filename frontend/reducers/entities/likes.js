import { RECEIVE_VIDEO_LIKES, RECEIVE_COMMENT_LIKES, REMOVE_LIKE, RECEIVE_LIKE} from "../../actions/likes";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
      case RECEIVE_VIDEO_LIKES:
      case RECEIVE_COMMENT_LIKES:
        return action.likes;
      case RECEIVE_LIKE:
        const newLike = { [action.like.id]: action.like };
        return Object.assign({}, state, newLike);
      case REMOVE_LIKE:
        const newState = Object.assign({}, state);
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
};

export default likesReducer;