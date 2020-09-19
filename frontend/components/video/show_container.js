import React from 'react';
import {connect} from 'react-redux';

import {fetchVideo} from '../../actions/videos';
import VideoShow from './show';

const mSTP = (state, ownProps) => ({
    // currentUser: state.entities.session.currentUser,
    videoId: parseInt(ownProps.match.params.videoId),
    video: state.entities.videos[parseInt(ownProps.match.params.videoId)],

});

const mDTP = dispatch => ({
    fetchVideo: id => dispatch(fetchVideo(id)),
});

export default connect(mSTP, mDTP)(VideoShow);