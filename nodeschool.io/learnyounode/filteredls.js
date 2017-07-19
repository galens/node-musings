var fs = require('fs');
var path = require('path');

var dir_name = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir_name, function callback(err, list) {
    if(err) return console.log(err);
    for(i=0;i<list.length;i++) {
        if(path.extname(list[i]).substr(1) == extension) {
            console.log(list[i]);
        }
    }
});