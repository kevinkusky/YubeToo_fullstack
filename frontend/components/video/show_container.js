import React from 'react';
import {connect} from 'react-redux';

import {fetchVideo} from '../../actions/videos';
import {fetchVideoLikes} from '../../actions/likes';
import { entityAsArray } from '../../reducers/selectors';
import VideoShow from './show';

const mSTP = ( { entities: { videos, likes }}, ownProps) => ({
    // currentUser: state.entities.session.currentUser,
    videoId: parseInt(ownProps.match.params.videoId),
    video: videos[parseInt(ownProps.match.params.videoId)],
    videoLikes: entityAsArray(likes).filter(
        like => (
            like.likeable_type === 'Video' && 
            like.dislike === false
        )
    ),
    videoDislikes: entityAsArray(likes).filter(
        like => (
            like.likeable_type === 'Video' && 
            like.dislike === true
        )
    ),
});

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId))
});

export default connect(mSTP, mDTP)(VideoShow);