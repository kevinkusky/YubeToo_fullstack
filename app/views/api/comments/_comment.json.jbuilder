json.extract! comment, :id, :body, :author_id
json.author comment.commenter
json.likes comment.likes
json.commentTime comment.time_since_post
json.parentAuthor comment.parent_author ? comment.parent_author : ''
