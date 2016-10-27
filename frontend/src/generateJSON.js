function generateJSON () {
  var userId = randomSelect(['bob', 'alice']);
  var transactionType = randomSelect(['payment', 'login']);
  var deviceType = randomSelect(['smart_phone', 'feature_phone', 'browser']);

  var request = {
    userId : userId,
    transaction : {
      type : transactionType,
      time : new Date().toISOString()
    },
    location : {
      longitude : -0.0884756489625224,
      latitude : 51.5196782702595
    },
    device : {
      type : deviceType,
      os : 'Apple',
      model : 'iPhone 7'
    }
  };
  return JSON.stringify(request, null, '\t');
}

function randomSelect(array) {
  return array[Math.floor(Math.random()*array.length)];
}
