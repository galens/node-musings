var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file_loc = process.argv[3];

var server = http.createServer(function (req, res) {
    console.log('client connected');
    res.writeHead(200, {"Content-Type" : "text/plain"});
    //res.end("output goes to connecting client");
    var readStream = fs.createReadStream(file_loc);
    readStream.pipe(res);
});
server.listen(port, function() { // listening server
    console.log('server bound');
});