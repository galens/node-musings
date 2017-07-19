var fs = require('fs');

buffer_stuff = fs.readFileSync(process.argv[2]);
var str = buffer_stuff.toString();
var arr_split = str.split('\n');
console.log(arr_split.length-1);