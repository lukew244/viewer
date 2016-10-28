# Transaction viewer

A frontend web app that makes authentication requests to a backend server using randomised data, and displays the request response.

## Frontend - Javascript, JQuery, Jasmine and Zombie

```
Setup/run:
npm install
http-server or open index.html

Unit tests:
open SpecRunner.html

Feature tests:
http-server
jasmine-node spec/featureSpec.js
```
On pressing the generate request button, a JSON with authentication details is created (src/generateJSON.js); the logic of sending the request and processing the response is contained in src/app.js.



## Backend - Ruby Sinatra, RSpec

```
Setup/run:
bundle install
ruby app.rb

Tests:
rspec
```

The response is generated in lib/response.rb, and served to POST requests via the controller (app.rb).
