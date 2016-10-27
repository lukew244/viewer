require 'response'
require 'json'

describe Response do
  subject(:response) {described_class.new}

  it 'generates JSON with random status' do
    expect([{"status" => "successful"},
            {"status" => "fraudulent"},
            {"status" => "timed_out"},
      ]).to include(JSON.parse(response.generate))
  end
end
