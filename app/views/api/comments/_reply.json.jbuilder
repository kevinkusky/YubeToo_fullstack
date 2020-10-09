json.extract! reply, :id, :body, :author_id, :commentable_type, :commentable_id
json.author reply.commenter.username
json.likes reply.likes.where(dislike: false)
json.dislikes reply.likes.where(dislike: true)
json.commentTime reply.time_since_post
json.parentComment reply.parent_comment