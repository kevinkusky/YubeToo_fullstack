json.extract! video, :id, :title, :description, :creator_id
json.creator video.creator
# json.views video.views.length
json.videoUrl video.video.attached? ? url_for(video.video) : ''
json.titlecardUrl video.titlecard.attached? ? url_for(video.tirlecard) : ''