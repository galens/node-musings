var fs = require('fs');
var file = process.argv[2];
file_data = fs.readFile(file, 'utf8', function finished(err, fileContents) {
	if(err) {
		console.log('an error occurred');
		console.log(err);
	} else {
		file_split = fileContents.split('\n');
		console.log(file_split.length-1);
	}
});
