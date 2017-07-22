var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    console.log('client connected');
    res.writeHead(200, {"Content-Type" : "text/plain"});
    if(req.method == 'POST') {
        console.log('POST received');
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
});
server.listen(port, function() { // listening server
    console.log('server bound');
});