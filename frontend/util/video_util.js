export const fetchVideos = data =>(
    $.ajax({
        method: 'GET',
        url: 'api/videos',
        data
    })
);

export const fetchVideo = id =>(
    $.ajax({
        method: 'GET',
        url: `api/videos/${id}`
    })
);

export const createVideo = form => (
    $.ajax({
        method: 'POST',
        url: 'api/videos',
        data: form,
        contentType: false,
        processData: false
    })
);

export const editVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: {video}
    })
);

export const deleteVideo = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/videos/${id}`
    })
);