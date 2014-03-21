var http = require('http');
var mysql = require('mysql');

var db = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'counter',
  password: 'counter',
  database: 'counter'
});

var counter = 0;

var server = http.createServer(function(req, res) {
  counter++;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write('Jag har visats ' + counter + ' gånger.');
  res.end();
});

server.listen(4000);