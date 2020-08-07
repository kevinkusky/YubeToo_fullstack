export const videosAsArray = ({ videos }) =>(
    Object.keys(videos).map(key => videos[key])
);