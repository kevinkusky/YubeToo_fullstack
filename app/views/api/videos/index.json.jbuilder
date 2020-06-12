json.array! @videos do |video|
    json.extract! video, :id, :title, :creator_id
    json.titlecardURL url_for(video.titlecard)
end