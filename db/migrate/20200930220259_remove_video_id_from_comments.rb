class RemoveVideoIdFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :video_id, :integer
  end
end
