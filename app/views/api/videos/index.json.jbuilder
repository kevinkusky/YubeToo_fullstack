json.array! @videos do |video|
    # pass through all needed data
    json.extract! video, :id, :title, :creator_id
    json.titlecardURL video.titlecard.attached? ? 
        url_for(video.titlecard) : ''
end