json.array! @videos do |video|
    # pass through all needed data
    json.extract! video, :id, :title, :creator, :view_count, :created_at, :description
    json.titlecardURL video.titlecard.attached? ? url_for(video.titlecard) : ''
end