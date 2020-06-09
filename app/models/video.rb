# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  creator_id  :integer          not null
#  view_count  :integer          not null
#  playlist_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :creator_id, :view_count, presence: true

    belongs_to :creator,
        class_name: :User,
        foreign_key: :creator_id

end
