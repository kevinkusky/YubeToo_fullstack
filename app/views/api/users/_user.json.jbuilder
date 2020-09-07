json.extract! user, :id, :email, :username
json.videosViewed user.viewed_videos.uniq
# .each do |video|
#     json.set! video.id do
#         json.partial! '/apu/videos/video', video: video
#     end
# end
json.userVideos user.videos
#json.likedVideos user.liked_videos
# //json.favorite_videos user.favorite_videos.pluck(:id)