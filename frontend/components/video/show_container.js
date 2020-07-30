import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../../actions/comments';
import {fetchLikes} from '../../actions/likes';
import {fetchVideo} from '../../actions/video';
import VideoShow from './show';

const mSTP = state => ({
    
});

const mDTP = dispatch => ({

});

export default connect(null)(VideoShow);