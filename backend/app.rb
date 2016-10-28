require 'sinatra/base'
require './lib/response'

class ResponseServer < Sinatra::Base
  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  post '/transaction' do
    response = Response.new
    return response.generate
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
