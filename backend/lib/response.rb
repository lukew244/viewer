require 'json'

class Response

  OPTIONS = [:successful, :fraudulent, :timed_out]

  def generate
      response = {:status => OPTIONS.sample}.to_json
  end

end
