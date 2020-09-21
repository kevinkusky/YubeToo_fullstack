json.extract! comment, :id, :body, :author_id
json.author comment.commenter
json.likes Like.filter_likes('Comment', :id)
json.dislikes Like.filter_dislikes('Comment', :id)
json.commentTime comment.time_since_post
json.parentAuthor comment.parent_author ? comment.parent_author : ''