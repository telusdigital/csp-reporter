/*
 ***********
 * WARNING *
 ***********

 Do not run this in a production environment.  This version contains purposeful
 security vulnerabilities for demonstration purposes.

 Note: Server is locked down to localhost by default

 */

var CONFIG = require("./config"),
    http   = require('http'),
    mysql  = require('mysql'),
    PORT   = 8080

var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        var body = ""

        request.addListener('data', function(chunk){
          body += chunk
        });

        request.addListener('end', function(chunk){
          if (chunk) {
            body += chunk
          }

          try {
            csp_report = JSON.parse (body)['csp-report'];
            
            var connection = mysql.createConnection ({
              host     : CONFIG.DATABASE_HOST,
              user     : CONFIG.DATABASE_USER,
              password : CONFIG.DATABASE_PASSWORD,
              database : CONFIG.DATABASE_DATABASE_NAME
            });

            // Variables not escaped
            // this allows for sql injection
            // this is for demonstration purpouses only
            // DO NOT RUN THIS IN AT ALL UNLESS YOU KNOW WHAT YOUR DOING
            var document_uri       = csp_report['document-uri'],
                referrer           = csp_report['referrer'],
                violated_directive = csp_report['violated-directive'],
                original_policy    = csp_report['original-policy'],
                blocked_uri        = csp_report['blocked-uri'],
                date               = "CURRENT_TIMESTAMP",
                sql                = "INSERT INTO `csp` (`document_uri`, `referrer`, `violated-directive`, `original-policy`, `blocked-uri`, `date`) VALUES (" + document_uri + ", " + referrer + ", " + violated_directive + ", " + original_policy + ", " + blocked_uri + ", " + date + ");"

            connection.query (sql, function (error, rows, fields) {
              if (error)
                console.log ('Error:' + error)
            })
            connection.end ()
          } catch (error) {
            console.log ("Error: " + error)
          }

          response.writeHead (200, {'Content-Type': 'text/html'})
          response.end ('')
        })
    } else {
        response.writeHead (404)
        response.end ('')
    }
});

server.listen (PORT, '127.0.0.1', function () {
    console.log("Server listening on: http://localhost:%s", PORT)
});
