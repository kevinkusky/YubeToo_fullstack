require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# wrap in 'transaction'

ActiveRecord::Base.transaction do
    Like.destroy_all
    Comment.destroy_all
    View.destroy_all
    Video.destroy_all
    User.destroy_all

    demoUser = User.create({ 
        username: 'Test-User',
        email: 'test-user@gmail.com',
        password: '123456',
    })
    coolUser = User.create({ 
        username: 'Bobthebuilder',
        email: 'canfixit@gmail.com',
        password: '123456',
    })
    myFirstVideo = Video.new({
        title: 'My First Video',
        description: 'Hope yall like it',
        creator_id: coolUser.id,
        duration: '1:10'
    })
    video1File = open('https://yubetoo-seed.s3.amazonaws.com/fancyguitar.mov')
    myFirstVideo.video.attach({
        io: video1File, filename: 'fancyguitar.mov'
    })
    video1TitleCard = open('https://yubetoo-seed.s3.amazonaws.com/yubtetoo.png')
    myFirstVideo.titlecard.attach({
        io: video1TitleCard, filename: 'yubetoo.png'
    })
    myFirstVideo.save
end