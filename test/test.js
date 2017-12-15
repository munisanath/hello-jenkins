var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Iam using DevOps', function(done) {
    request(app).get('/').expect('Iam using DevOps', done);
  });
});
