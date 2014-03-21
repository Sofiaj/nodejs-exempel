var http = require('http');

var fileStream = require('fs');

var filnamn = "./counter.json";

var counter = {count: 0};

fileStream.exists(filnamn, function(filen_finns) {
  if (filen_finns) {
    fileStream.readFile(filnamn, 'utf8', function(error, data_ur_filen) {
      if (error) throw error;
      var text_ur_filen = data_ur_filen.toString();
      var objekt_ur_filen = JSON.parse(text_ur_filen);
      counter.count = objekt_ur_filen.count;
    });
  }
});

var server = http.createServer(function(req, res) {
  counter.count++;
  
  var objekt_som_json = JSON.stringify(counter);
  fileStream.writeFile(filnamn, objekt_som_json, 'utf8', function(error) {
    if (error) throw error;
    console.log('Sparat.');
  });
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write('Jag har visats ' + counter.count + ' gånger.');
  res.end();
});

server.listen(3000);
