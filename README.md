formatter-jsonp
===============
[![Build Status](https://travis-ci.org/restify/formatter-binary.svg?branch=refactor/mochaopts)](https://travis-ci.org/restify/formatter-binary)

Installation
============

`npm install restify-formatter-binary`

Usage
=======

```
var restify = require('restify');
var server = restify.createServer();
var binaryFormatter = require('restify-formatter-binary');

server.use(binaryFormatter);
server.listen(8080)
```

License
=======

MIT
