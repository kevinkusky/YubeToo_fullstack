import React from 'react';
import {connect} from 'react-redux';

import {fetchVideo} from '../../actions/videos';
import {fetchVideoLikes} from '../../actions/likes';
import { entityAsArray } from '../../reducers/selectors';
import VideoShow from './show';

const mSTP = ( { entities: { videos }}, ownProps) => ({
    // currentUser: state.entities.session.currentUser,
    videoId: parseInt(ownProps.match.params.videoId),
    video: videos[parseInt(ownProps.match.params.videoId)],
});

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
});

export default connect(mSTP, mDTP)(VideoShow);