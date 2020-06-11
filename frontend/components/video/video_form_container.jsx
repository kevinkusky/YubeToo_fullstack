import {connect} from 'react-redux';
import {createVideo, editVideo} from '../../actions/video';
import VideoForm from './video_form';

// const mSTP = state => (
//     {
        
//     }
// );

const mDTP = dispatch => (
    {
        createVideo: video => dispatch(createVideo(video))
    }
);

export default connect(null, mDTP)(VideoForm);