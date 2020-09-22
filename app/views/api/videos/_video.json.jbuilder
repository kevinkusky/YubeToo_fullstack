json.extract! video, :id, :title, :description, :duration, :creator_id
json.creatorName video.creator.username
json.views video.views.length
json.uploadDate video.created_at.strftime('%b, %d %Y')
json.uploadTime video.time_since_upload
json.videoUrl video.video.attached? ? url_for(video.video) : ''
json.titlecardUrl video.titlecard.attached? ? url_for(video.titlecard) : ''
json.likes video.likes.where(dislike: false)
json.dislikes video.likes.where(dislike: true)
json.comments video.comments
json.totalComments video.comment_sum
