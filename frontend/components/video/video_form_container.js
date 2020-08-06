import {connect} from 'react-redux';
import {createVideo, editVideo} from '../../actions/videos';
import VideoForm from './video_form';

const mSTP = state => (
    {
        currentUser: state.session.currentUser
    }
);

const mDTP = dispatch => (
    {
        createVideo: video => dispatch(createVideo(video))
    }
);

export default connect(mSTP, mDTP)(VideoForm);