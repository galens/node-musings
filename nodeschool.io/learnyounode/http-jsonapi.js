var http = require('http'); 
var url = require('url');
var map = require('through2-map');

var port = process.argv[2];


var server = http.createServer(function (req, res) {
    console.log('client connected');
    res.writeHead(200, {"Content-Type" : "application/json"});
    query = url.parse(req.url, true).query;
    parsedDate = new Date(query.iso);
    if(url.parse(req.url).pathname == '/api/parsetime') {
        finalDate = { "hour" : parsedDate.getHours(),
                      "minute" : parsedDate.getMinutes(),
                      "second" : parsedDate.getSeconds() }
    } else if(url.parse(req.url).pathname == '/api/unixtime') {
        finalDate = { "unixtime" : parsedDate.getTime() }
    }
    res.end(JSON.stringify(finalDate));
});
server.listen(port, function() { // listening server
    console.log('server bound');
});