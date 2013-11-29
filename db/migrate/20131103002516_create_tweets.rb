class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :tweet_created_at
      t.string :screen_name
      t.string :text

      t.timestamps
    end
  end
end
