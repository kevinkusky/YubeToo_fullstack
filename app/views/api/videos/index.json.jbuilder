json.array! @videos do |video|
    # pass through all needed data
    json.set! video.id do
        json.partial! '/api/videos/video', video: video
    end
end