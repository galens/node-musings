var fs = require('fs');
file_data = fs.readFileSync(process.argv[2]).toString();
file_split = file_data.split('\n');
file_split_count = file_split.length;
console.log(file_split_count-1);