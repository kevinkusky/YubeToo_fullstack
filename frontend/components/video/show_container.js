import React from 'react';
import {connect} from 'react-redux';

import {fetchVideo} from '../../actions/videos';
import {fetchVideoLikes} from '../../actions/likes';
import VideoShow from './show';

const mSTP = ({ session, entities: { videos, likes } }, ownProps) => ({
  currentUserId: session.currentUser ? session.currentUser.id : null,
  videoId: parseInt(ownProps.match.params.videoId),
  video: videos[parseInt(ownProps.match.params.videoId)],
  allVideoLikes: Object.values(likes).filter(
        like => (like.likeable_type === "Video") && (like.likeable_id === parseInt(ownProps.match.params.videoId))
  ),
});

const mDTP = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideoLikes: videoId => dispatch(fetchVideoLikes(videoId))
});

export default connect(mSTP, mDTP)(VideoShow);