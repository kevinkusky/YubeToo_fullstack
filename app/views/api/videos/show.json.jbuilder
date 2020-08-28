json.extract @video, :id, :title, :creator, :view_count, :created_at, :description
json.title_cardURL url_for(@video.titlecard)
json.videoURL url_for(@video.video)