var http = require('http');

var url = process.argv[2];
http.get(url, function callback(response) {
    var str = '';
    response.on('data', function (data) {
        str += data.toString();
    });
    response.on('end', function () {
        console.log(str.length);
        console.log(str);
    });
    response.on('error', console.error);
}).on('error', console.error);