# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  video_id          :integer          not null
#  author_id         :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :video_id, :author_id, presence: true

    belongs_to :video,
        class_name: :Videos,
        foreign_key: :video_id

    # has_one :parent_comment,
    #     foreign_key: :parent_comment_id,
    #     class_name: :Comments

    belongs_to :commenter,
        foreign_key: :author_id,
        class_name: :Users

    # has_many :likes,
    #     as: :likeable

end
