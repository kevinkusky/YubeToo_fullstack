# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string
#  likeable_id   :bigint
#  liker_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    validates :liker_id, presence: true

    belongs_to :likeable,
        polymorphic: true
end
