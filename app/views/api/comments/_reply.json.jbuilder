json.extract! reply, :id, :body, :author_id, :commentable_type, :commentable_id
json.author reply.commenter.username
json.replyTo reply.parent_author.id
json.likes reply.likes.where(dislike: false)
json.dislikes reply.likes.where(dislike: true)
json.timeSincePost reply.time_since_post