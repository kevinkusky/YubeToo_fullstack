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
    userOne = User.create({ 
        username: 'Bobthebuilder',
        email: 'canfixit@gmail.com',
        password: 'cake1234',
    })
    userTwo = User.create({ 
        username: 'Ido Portal',
        email: 'thismovement@gmail.com',
        password: 'lizardking2',
    })
    userThree = User.create({ 
        username: 'Adam Neely',
        email: 'qnawan@gmail.com',
        password: 'bassking5',
    })
    userFour = User.create({ 
        username: 'emosonglyric5',
        email: 'anotherfakeemail@gmail.com',
        password: 'marvinsroom12',
    })
    userFive = User.create({ 
        username: 'Joanne',
        email: 'yojo57@gmail.com',
        password: 'codyboy2',
    })
    videoOne = Video.new({
        title: 'My First Video',
        description: 'Hope yall like it',
        creator_id: userThree.id,
        duration: '1:10'
    })
    videoOneFile = open('https://yubetoo-seed.s3.amazonaws.com/fancyguitar.mov')
    videoOne.video.attach({
        io: videoOneFile, filename: 'fancyguitar.mov'
    })
    videoOneTitleCard = open('https://yubetoo-seed.s3.amazonaws.com/yubtetoo.png')
    videoOne.titlecard.attach({
        io: videoOneTitleCard, filename: 'yubetoo.png'
    })
    videoOne.save
    videoTwo = Video.new({
        title: 'Press Handstand',
        description: 'This is a press handstand',
        creator_id: userTwo.id,
        duration: '1:10'
    })
    videoTwoFile = open('https://yubetoo-seed.s3.amazonaws.com/videotwo.mov')
    videoTwo.video.attach({
        io: videoTwoFile, filename: 'videotwo.mov'
    })
    videoTwoTitleCard = open('https://yubetoo-seed.s3.amazonaws.com/videotwotitle.png')
    videoTwo.titlecard.attach({
        io: videoTwoTitleCard, filename: 'videotwotitle'
    })
    videoTwo.save
    videoThree = Video.new({
        title: 'I Want You Back - Bass Cover',
        description: 'Classic Bass Line',
        creator_id: userThree.id,
        duration: '1:10'
    })
    videoThreeFile = open('https://yubetoo-seed.s3.amazonaws.com/videothree.mov')
    videoThree.video.attach({
        io: videoThreeFile, filename: 'videothree.png'
    })
    videoThreeTitleCard = open('https://yubetoo-seed.s3.amazonaws.com/videothreetitle.png')
    videoThree.titlecard.attach({
        io: videoThreeTitleCard, filename: 'videothreetitle.png'
    })
    videoThree.save
    videoCommentOne = Comment.create({
        body: 'Nice hair cut, can I get your barbers name?',
        author_id: userTwo.id,
        commentable_type: 'Video',
        commentable_id: videoOne.id
    })
    videoCommentTwo = Comment.create({
        body: 'What tuning is this in? So nice!',
        author_id: demoUser.id,
        commentable_type: 'Video',
        commentable_id: videoOne.id
    })
    videoCommentThree = Comment.create({
        body: 'I can fix it, watch my page to see how',
        author_id: userOne.id,
        commentable_type: 'Video',
        commentable_id: videoOne.id
    })
    videoCommentFour = Comment.create({
        body: 'Now try that while playing bass!',
        author_id: userThree.id,
        commentable_type: 'Video',
        commentable_id: videoTwo.id
    })
    videoCommentFive = Comment.create({
        body: 'Who wears the fisherman logo in 2020!?',
        author_id: demoUser.id,
        commentable_type: 'Video',
        commentable_id: videoThree.id
    })
    replyOne = Comment.create({
        body: 'Not the tuning for FREEBIRD!  Play FREEBIRD',
        author_id: userOne.id,
        commentable_type: 'Comment',
        commentable_id: videoCommentTwo.id
    })
    replyTwo = Comment.create({
        body: 'It is in open G Minor tuning!  Glad you enjoyed',
        author_id: userTwo.id,
        commentable_type: 'Comment',
        commentable_id: videoCommentTwo.id
    })
    replyThree = Comment.create({
        body: 'I can fix it, watch my page to see how',
        author_id: userOne.id,
        commentable_type: 'Comment',
        commentable_id: videoCommentOne.id
    })
    replyFour = Comment.create({
        body: 'I can fix it, watch my page to see how',
        author_id: userOne.id,
        commentable_type: 'Comment',
        commentable_id: videoCommentFour.id
    })
    replyFive = Comment.create({
        body: 'Hey - at least we made it to the ECF!!!',
        author_id: userThree.id,
        commentable_type: 'Comment',
        commentable_id: videoCommentFive
    })
    videoLikeOne = Like.create({
        liker_id: userFive.id,
        likeable_type: 'Video',
        likeable_id: videoTwo.id,
        dislike: true
    })
    videoLikeTwo = Like.create({
        liker_id: userOne.id,
        likeable_type: 'Video',
        likeable_id: videoOne.id,
        dislike: false
    })
    videoLikeThree = Like.create({
        liker_id: userThree.id,
        likeable_type: 'Video',
        likeable_id: videoThree.id,
        dislike: false
    })
    commentLikeOne = Like.create({
        liker_id: userFour.id,
        likeable_type: 'Comment',
        likeable_id: videoCommentOne.id,
        dislike: false
    })
    commentLikeTwo = Like.create({
        liker_id: userTwo.id,
        likeable_type: 'Comment',
        likeable_id: videoCommentTwo.id,
        dislike: true
    })
    commentLikeThree = Like.create({
        liker_id: userTwo.id,
        likeable_type: 'Comment',
        likeable_id: videoCommentThree.id,
        dislike: true
    })
    commentLikeFour = Like.create({
        liker_id: userThree.id,
        likeable_type: 'Comment',
        likeable_id: videoCommentFour.id,
        dislike: false
    })

    replyLikeOne = Like.create({
        liker_id: userFive.id,
        likeable_type: 'Comment',
        likeable_id: replyFive.id,
        dislike: true
    })
    replyLikeTwo = Like.create({
        liker_id: userTwo.id,
        likeable_type: 'Comment',
        likeable_id: replyTwo.id,
        dislike: false
    })
    replyLikeThree = Like.create({
        liker_id: userOne.id,
        likeable_type: 'Comment',
        likeable_id: replyFour.id,
        dislike: true
    })
    replyLikeFour = Like.create({
        liker_id: userFour.id,
        likeable_type: 'Comment',
        likeable_id: replyFive.id,
        dislike: false
    })
end