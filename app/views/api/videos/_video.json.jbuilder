json.extract! video, :id, :title, :description, :creator_id
json.creator video.creator
json.views video.views.length
# json.uploadDate video.created_at.strftime('%d, %b %Y')
json.uploadTime video.time_since_uploaded
json.videoUrl video.video.attached? ? url_for(video.video) : ''
json.titlecardUrl video.titlecard.attached? ? url_for(video.tirlecard) : ''