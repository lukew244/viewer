
describe('generateJSON', function() {
  var json;

  beforeEach(function() {
    json = JSON.parse(generateJSON());
  });

  it('generates a new JSON object', function() {
    expect(JSON.parse(generateJSON())).toEqual(jasmine.any(Object));
  });

  it('JSON contains a user', function() {
    expect(json.userId).toEqual(jasmine.any(String));
  });

  it('JSON contains transaction data', function() {
    expect(json.transaction.type).toEqual(jasmine.any(String));
    expect(json.transaction.time).toEqual(jasmine.any(String));
  });

  it('JSON contains location data', function() {
    expect(json.location.latitude).toEqual(jasmine.any(Number));
    expect(json.location.longitude).toEqual(jasmine.any(Number));
  });

  it('JSON contains device data', function() {
    expect(json.device.type).toEqual(jasmine.any(String));
    expect(json.device.os).toEqual('Apple');
    expect(json.device.model).toEqual('iPhone 7');
  });
});

describe('randomSelect', function() {
  it('chooses a user at random', function() {
    var users = ['bob', 'alice'];
    spyOn(Math, "random").and.returnValue(0.5);
    expect(randomSelect(users)).toEqual('alice');
  });
});
