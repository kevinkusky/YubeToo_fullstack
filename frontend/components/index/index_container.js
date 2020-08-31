import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import VideoIndex from './video_index';
import{videosAsArray} from '../../reducers/selectors';
import { fetchVideos } from '../../actions/videos';

const mSTP = state => ({
    videos: videosAsArray(state.entities),
    // videos: Object.values(Object.values(entities.videos))
});

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
});

export default withRouter(connect(mSTP, mDTP)(VideoIndex));