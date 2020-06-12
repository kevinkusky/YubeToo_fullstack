import {connect} from 'react-redux';
import VideoIndex from './video_index';
import{asArray} from '../../reducers/slectors';
import {} from '../../actions/session';

const mSTP = state => ({
    videos: asArray(state.entities),
    currentUser: state.session.currentUser
});

// const mDTP = dispatch=> ({
//     videos: asArray(state.entities)
// });

export default connect(mSTP)(VideoIndex);