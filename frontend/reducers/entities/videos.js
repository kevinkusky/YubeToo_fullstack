import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../../actions/videos';
import { REMOVE_LIKE, RECEIVE_LIKE } from '../../actions/likes';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
      case RECEIVE_VIDEOS:
        return action.videos;
      case RECEIVE_VIDEO:
        return Object.assign({}, state, { [action.video.id]: action.video });
      case REMOVE_VIDEO:
        const newState = Object.assign({}, state);
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
};

export default videosReducer;