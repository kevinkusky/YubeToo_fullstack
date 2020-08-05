import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../../actions/comments';
import {fetchLikes} from '../../actions/likes';
import {fetchVideo} from '../../actions/videos';
import VideoShow from './show';

const mSTP = state => ({
    
});

const mDTP = dispatch => ({
    fetchVideo: id => dispatch(fetchVideo(id)),
    // fetchComments: ,
    // fetchLikes:
});

export default connect(null, mDTP)(VideoShow);