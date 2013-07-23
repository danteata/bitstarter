var express = require('express');
var fs = require('fs');
var outfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var htmlContent = fs.readFileSync(outfile);
  var out = htmlContent.toString();
  // response.end();
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
