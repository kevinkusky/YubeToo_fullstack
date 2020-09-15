class AddDurationToVideos < ActiveRecord::Migration[5.2]
  def change
    change_table :videos do|t|
        t.string :duration, null: false
    end

    add_index :videos, :duration
  end
end
