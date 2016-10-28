var URL = 'http://localhost:4567/transaction';

$("#generate-request").on("click", function() {
  var requestData = generateJSON();
  $('#request-text').html(requestData);
  sendRequest(requestData, displayResponse);
});

function sendRequest(requestData, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
    callback(request.status, request.responseText);
    }
  };
  request.open("POST", URL);
  request.send(requestData);
}

function displayResponse(status, response) {
  if (response) JSON.parse(response);
  $('#response-text').empty();
  $('#response-text').append('HTTP Response code ', status, '\n', '\n', response);
}
