class CorrectCurrentTables < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :view_count
    remove_column :videos, :playlist_id
    rename_column :users, :email_address, :email
    add_column :comments, :commentable_type, :string
    change_column_null :comments, :commentable_type, false
    rename_column :comments, :parent_comment_id, :commentable_id
    change_column_null :comments, :commentable_id, false
    add_column :likes, :dislike, :boolean, :default => false
    change_column_null :likes, :likeable_type, false
    change_column_null :likes, :likeable_id, false
  end
end
