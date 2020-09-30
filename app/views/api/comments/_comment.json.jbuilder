json.extract! comment, :id, :body, :author_id, :commentable_type, :commentable_id
json.author comment.commenter
json.replies comment.comments do |reply|
    json.partial! '/api/comments/reply', reply: reply
end
json.likes comment.likes.where(dislike: false)
json.dislikes comment.likes.where(dislike: true)
json.commentTime comment.time_since_post
json.parentAuthor comment.parent_author ? comment.parent_author : ''