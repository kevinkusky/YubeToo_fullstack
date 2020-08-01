export const fetchComments = () => (
    $.ajax({
        method: 'GET',
        url: 'api/comments'
    })
);

export const fetchComment = id => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${id}`
    })
);

export const createComment = form => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: {form}
    })
);

export const editComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment}
    })
);

export const deleteComment = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`,
    })
);