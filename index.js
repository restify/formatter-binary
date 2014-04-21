'use strict';

function formatBinary(req, res, body) {
  if (body instanceof Error) {
    res.statusCode = body.statusCode || 500;
  }

  if (!Buffer.isBuffer(body)) {
    body = new Buffer(body.toString());
  }

  res.setHeader('Content-Length', body.length);
  return (body);
}

module.exports = formatBinary;

