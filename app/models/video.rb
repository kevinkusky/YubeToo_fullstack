# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :creator_id, presence: true
    validate :ensure_video

    belongs_to :creator,
        class_name: :User,
        foreign_key: :creator_id

    has_many :views,
        foreign_key: :video_id,
        class_name: :View

    has_many :comments, 
        as: :commentable,
        dependent: :destroy

    has_many :likes, 
        as: :likeable,
        dependent: :destroy
        
    has_one_attached :video

    has_one_attached :titlecard

    def ensure_video
        unless self.video.attached?
            errors[:video] << 'video did not attach'
        end
    end

    def time_since_upload
        time_difference = Time.now - Time.parse(self.created_at.to_s)
        years_since = (time_difference / 1.year).to_i
        months_since = (time_difference / 1.month).to_i
        weeks_since = (time_difference / 1.week).to_i
        days_since = (time_difference / 1.day).to_i
        hours_since = (time_difference / 1.hour).to_i
        minutes_since = (time_difference / 1.minute).to_i

        if years_since >= 1
            years_since === 1 ? "1 year ago" : "#{years_since} years ago"
        elsif months_since >= 1
            months_since === 1 ? "1 month ago" : "#{months_since} months ago"
        elsif weeks_since >= 1
            weeks_since === 1 ? "1 week ago" : "#{weeks_since} weeks ago"
        elsif days_since >= 1
            days_since === 1 ? "1 day ago" : "#{days_since} days ago"
        elsif hours_since >= 1
            hours_since === 1 ? "1 hour ago" : "#{hours_since} hours ago"
        elsif minutes_since >= 1
            minutes_since === 1 ? "1 minute ago" : "#{minutes_since} minutes ago"
        else
            'Just now'
        end
    end

    def comment_sum
        comment_tot = self.comments.length
        self.comments.each{ |comment| comment_tot += comment.comments.length }
        comment_tot
    end
end
