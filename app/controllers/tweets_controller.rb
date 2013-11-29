class TweetsController < ApplicationController
  def index

  end

  def fetch
  	searchterm = params[:searchterm]
    if searchterm[0] == "@"
      searchterm = searchterm[1..-1]
    end
    client = Twitter::Client.new
    @tweets = client.user_timeline(searchterm, :count => 300)
  	#tweets = Twitter.search(searchterm) 
  	@mapped_tweets = @tweets.map do |tweet|
  		{ :text => tweet[:text] }
  	end
  	render :json => @mapped_tweets
  
  end
end



