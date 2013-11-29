class Tweet < ActiveRecord::Base
  attr_accessible :screen_name, :text, :tweet_created_at
end
