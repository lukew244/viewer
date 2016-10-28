var Browser = require('zombie');

describe('app', function() {
  beforeEach(function() {
    this.browser = new Browser({ site: 'http://localhost:8080' });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('displays button to generate request', function(){
    this.browser.assert.element('#generate-request');
  });

  it('displays empty request box', function(){
   this.browser.assert.element('#request-text');
   this.browser.assert.text("#request-text", "");
  });

  it('displays empty response box', function(){
   this.browser.assert.element('#response-text');
   this.browser.assert.text("#response-text", "");
  });

  it('displays request after button pressed', function() {
    this.browser.pressButton('Generate request');
    this.browser.assert.text('#request-text', new RegExp(/userId/));
  });

  it('displays response after button pressed', function() {
    var browser = this.browser;
    this.browser.pressButton('Generate request');
    this.browser.wait().then( function() {
      browser.assert.text('#response-text', new RegExp(/HTTP Response/));
    });
  });
});
