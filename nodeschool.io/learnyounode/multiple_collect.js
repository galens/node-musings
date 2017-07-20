var http = require('http');

var argv = process.argv;
var results = [];

function geturl(url, func, cntr) {
    http.get(url, function callback(response) {
        var str = '';
        response.on('data', function (data) {
            str += data.toString();
        });
        response.on('end', function () {
            func(str, cntr);
        });
        response.on('error', console.error);
    }).on('error', console.error);
}

function increment_results(data, counter) {
    results[counter] = data;
    if(typeof results[0] !== 'undefined' && typeof results[1] !== 'undefined' && typeof results[2] !== 'undefined') {
        results.forEach(function(data) {
            console.log(data);
        });
    }
}

index = 2;
for(var i=0;i<argv.length-2;i++) {
  geturl(process.argv[index], increment_results, i);
  index++;
}