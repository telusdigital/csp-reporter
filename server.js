var http = require('http');
var PORT = 8080;

var server = http.createServer(function (request, response){
    var body = ""

    if (request.method == 'POST') {
        request.addListener('data', function(chunk){
          body += chunk;
        });

        request.addListener('end', function(chunk){
          if (chunk) {
            body += chunk;
          }

          console.log (body);

          response.writeHead(200, {'Content-Type': 'text/html'});
          response.end('');
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("noop ... try POST");
    }
});

server.listen(PORT, '0.0.0.0', function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
