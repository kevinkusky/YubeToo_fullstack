# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length:{ minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    #Associations
    has_many :videos,
        class_name: :Video,
        foreign_key: :creator_id

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment
    
    has_many :video_views,
        foreign_key: :viewer_id,
        class_name: :View

    has_many :viewed_videos,
        through: :video_views,
        source: :video

    has_many :likes,
        class_name: :Like,
        foreign_key: :liker_id

    def filter_likes
        likes = self.likes.where(dislike: false, likeable_type: 'Video')
        liked_videos = []
        
        likes.each do |like|
            liked_videos.push(like.likeable)
        end

        return liked_videos
    end

    # FIGVAPER - Authentication
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        bcrypt = BCrypt::Password.new(self.password_digest)

        bcrypt.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.base64(64)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    
    def reset_session_token
        self.session_token = SecureRandom.base64(64)
        # loud fail
        self.save!
        # implicit returns again
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
