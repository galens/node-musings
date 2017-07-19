var dir_name = process.argv[2];
var extension = process.argv[3];

var filtered_module = require('./filtered_module');

filtered_module(dir_name, extension, function(err, data){
    if(err) { console.log(err); } else {
        data.forEach(function(file) {
            console.log(file);
        });
    }
});