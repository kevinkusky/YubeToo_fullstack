json.extract! user, :id, :email, :username
# json.videosViewed user.viewed_videos.uniq.reverse() do |video|
#     json.set! video.id do
#         json.partial! '/api/videos/video', video: video
#     end
json.videosViewed user.viewed_videos.uniq.reverse() do |video|
    json.id video.id
    json.title video.title
    json.videoUrl video.video.attached? ? url_for(video.video) : ''
    json.titlecardUrl video.titlecard.attached? ? url_for(video.titlecard) : ''
    json.creator video.creator
    json.views video.views.length
    json.uploadDate video.created_at.strftime('%b, %d %Y')
    json.uploadTime video.time_since_upload
end
# json.userVideos user.videos do |video|
#     json.set! video.id do
#         json.partial! '/api/videos/video', video: video
#     end
json.userVideos user.videos.reverse() do |video|
    json.id video.id
    json.title video.title
    json.videoUrl video.video.attached? ? url_for(video.video) : ''
    json.titlecardUrl video.titlecard.attached? ? url_for(video.titlecard) : ''
    json.creator video.creator
    json.views video.views.length
    json.uploadDate video.created_at.strftime('%b, %d %Y')
    json.uploadTime video.time_since_upload
end
