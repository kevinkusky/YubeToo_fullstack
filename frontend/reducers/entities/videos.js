import {RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO} from '../../actions/videos';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            const newVid = { [action.video.id]: action.video.video };
            return newVid;
            // return Object.assign({}, state, newVid);
        case REMOVE_VIDEO:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default videosReducer;