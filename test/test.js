'use strict';

describe('binary formatter', function () {
  describe('binary converter', function() {
    it('should convert strings to binary buffer', function () {
      expect({
        body: '1234',
      }).to.be.formattedOut(new Buffer([0x31, 0x32, 0x33, 0x34]));
    });

    it('should keep the same if body is already buffer', function () {
      expect({
        body: new Buffer([0x31, 0x32, 0x33, 0x34]),
      }).to.be.formattedOut(new Buffer([0x31, 0x32, 0x33, 0x34]));
    });
  });

  describe('Content-Length', function() {
    it('should set Content-Length to 4 if body is "1234"', function() {
      expect({
        body: '1234'
      }).to.have.contentLength(4);
    });
  });

  describe('body', function() {
    describe('error', function() {
      it('should response code 500', function() {
        expect({
          body: new Error('error')
        }).to.has.responseCode(500);
      });

      it('should response code 404', function() {
        var error = new Error('error');
        error.statusCode = 404;
        error.body = 'errorBody';
        expect({
          body: error
        }).to.has.responseCode(404);
      });
    });
  });
});

