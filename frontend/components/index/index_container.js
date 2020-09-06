import {connect} from 'react-redux';
import VideoIndex from './video_index';
import{videosAsArray} from '../../reducers/selectors';
import { fetchVideos } from '../../actions/videos';

const mSTP = state => ({
    currentUser: state.session.currentUser ? state.session.currentUser.id : null,
    videos: videosAsArray(state.entities),
});

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP, mDTP)(VideoIndex);