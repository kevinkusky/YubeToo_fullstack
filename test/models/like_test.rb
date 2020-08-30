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
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
