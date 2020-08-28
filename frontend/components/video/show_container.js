import React from 'react';
import {connect} from 'react-redux';
// import {fetchComments} from '../../actions/comments';
// import {fetchLikes} from '../../actions/likes';
import {fetchVideo} from '../../actions/videos';
import VideoShow from './show';

const mSTP = ({entities, errors}, ownProps) => ({
    videoId: parseInt(ownProps.match.params.videoId)
});

const mDTP = dispatch => ({
    fetchVideo: id => dispatch(fetchVideo(id)),
//     fetchComments: ,
//     fetchLikes:
});

export default connect(mSTP, mDTP)(VideoShow);