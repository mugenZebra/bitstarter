var express = require('express');
var buf = require('buffer');
var fs = require('fs');
var app = express.createServer(express.logger());
var filename = "index.html";
var buffer = new Buffer(fs.readFileSync(filename), "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
