class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
        t.string :title, null: false
        t.string :description
        t.integer :creator_id, null: false
        t.integer :view_count, null: false
        t.integer :playlist_id

      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :creator_id
    add_index :videos, :playlist_id
    add_index :videos, :view_count
  end
end
