export const fetchComments = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}/comments`
    })
);

export const fetchReplies = commentId => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${commentId}/comments`
    })
);

export const fetchComment = id => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${id}`
    })
);

export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: {comment}
    })
);

export const editComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment}
    })
);

export const removeComment = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`,
    })
);