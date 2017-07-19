var fs = require('fs');
var path = require('path');

module.exports = function(dir_name, extension, callback) {
    fs.readdir(dir_name, function(err, list) {
        if(err) return callback(err);
        var arr_tmp = new Array();
        for(i=0;i<list.length;i++) {
            if(path.extname(list[i]).substr(1) == extension) {
                arr_tmp.push(list[i]);
            }
        }
        return callback(null, arr_tmp);
    });
}