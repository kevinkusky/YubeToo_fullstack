json.extract! video, :id, :title, :description, :creator_id
json.creator video.creator
json.views video.views.length
json.uploadDate video.created_at.strftime('%b, %d %Y')
json.uploadTime video.time_since_upload
json.videoUrl video.video.attached? ? url_for(video.video) : ''
json.videoUrl video.video.attached? ? url_for(video.video) : ''
