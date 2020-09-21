# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  liker_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  dislike       :boolean          default(FALSE)
#

class Like < ApplicationRecord
    validates :liker_id, :likeable_type, :likeable_id, presence: true
    validates :likeable_type, inclusion: { in: ['Video', 'Comment'] }
    validates :dislike, inclusion: { in: [true, false] }

    belongs_to :likeable,
        polymorphic: true

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User

    def self.filter_likes(type, id)
        Like.where(
            likeable_type: type, likeable_id: id, dislike: false
        )
    end

    def self.filter_dislikes(type, id)
        Like.where(
            likeable_type: type, likeable_id: id, dislike: true
        )
    end
end
