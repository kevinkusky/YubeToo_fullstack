# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  body             :string           not null
#  author_id        :integer          not null
#  commentable_id   :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  commentable_type :string           not null
#
class Comment < ApplicationRecord
    validates :body, :commentable_type, :commentable_id, :author_id, presence: true
    
    belongs_to :commenter,
        foreign_key: :author_id,
        class_name: :User
        
    belongs_to :commentable,
        polymorphic: true
        
    has_many :comments,
        as: :commentable,
        dependent: :destroy
    
    has_many :likes,
        as: :likeable,
        dependent: :destroy


    def time_since_post
        time_difference = Time.now - Time.parse(self.updated_at.to_s)
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

    def parent_comment
        self.commentable_id
    end

    def video_comment_sum
        video = Video.find(self.commentable_id)

        video.comment_sum
    end
end
