import {connect} from 'react-redux';
import VideoIndex from './video_index';
import{asArray} from '../../reducers/slectors';
import { fetchVideos } from '../../util/video_util';

const mSTP = state => ({
    videos: asArray(state.entities),
});

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP)(VideoIndex);