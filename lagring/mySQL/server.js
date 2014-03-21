var http = require('http');
var mysql = require('mysql');

var databas = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'counter',
  password: 'counter',
  database: 'counter'
});

var counter = 0;

var server = http.createServer(function(req, res) {
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  databas.query(
    "INSERT INTO `counter`.`counts` (`id`, `date`) VALUES (NULL, CURRENT_DATE());",
    function(error) {
      if (error) throw error;
    }
  );
  
  databas.query(
    "SELECT * FROM `counts`",
    function(error, resultat) {
      
      if (error) throw error;
      
      counter = resultat.length;
      
      res.write('Jag har visats ' + counter + ' gånger.');
      res.end();
    }
  );
  
});

server.listen(4000);