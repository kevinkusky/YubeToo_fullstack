json.extract! user, :id, :email, :username
json.videosViewed user.viewed_videos.uniq
json.userVideos user.videos
#json.likedVideos user.liked_videos
# //json.favorite_videos user.favorite_videos.pluck(:id)