var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello Jenkins World', function(done) {
    request(app).get('/').expect('hello Jenkins World', done);
  });
});
