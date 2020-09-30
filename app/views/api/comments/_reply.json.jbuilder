json.extract! reply, :id, :body, :author_id, :commentable_type, :commentable_id
json.commenter reply.commenter
json.replyTo reply.parent_author
json.timeSincePost reply.time_since_post