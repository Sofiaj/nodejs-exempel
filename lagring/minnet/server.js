var http = require('http');

var counter = 0;

var server = http.createServer(function(req, res) {
  counter++;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write('Jag har visats ' + counter + ' gånger.');
  res.end();
});

server.listen(3000);