json.array! @videos do |video|
    json.extract! video, :id, :title, :creator_id
    json.title_cardURL url_for(video.title_card)
end