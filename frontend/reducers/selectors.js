export const videosAsArray = videos => (
    Object.keys(videos).map(key => videos[key])
);

export const commentsAsArray = comments => (
    Object.keys(comments).map(key => comments[key])
);

// export const videoLikes = ({ likes }, videoId) => {
//     let currentVideoLikes = [];


// };