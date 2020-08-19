import * as APIUtil from '../util/video_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos,
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video,
});

const removeVideo = () => ({
    type: REMOVE_VIDEO
});

export const fetchVideos =  () => dispatch =>(
    APIUtil.fetchVideos().then(
        videos => dispatch(receiveVideos(videos))
    )
);

export const fetchVideo =  id => dispatch =>(
    APIUtil.fetchVideo(id).then(
        video => dispatch(receiveVideo(video))
    )
);

export const createVideo = (form) => dispatch =>(
    APIUtil.createVideo(form).then(
        video => dispatch(receiveVideo(video))
    )
);

export const editVideo = video => dispatch =>(
    APIUtil.editVideo(video).then(
        video => dispatch(receiveVideo(video))
    )
);

export const deleteVideo = id => dispatch => (
    APIUtil.deleteVideo(id).then(
        () => dispatch(removeVideo())
    )
);