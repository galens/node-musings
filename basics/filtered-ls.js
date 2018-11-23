var fs = require('fs');
var path = require('path');

directory = process.argv[2];
filter = process.argv[3];

fs.readdir(directory, function callback(err, list) {
	if(err) {
		console.log('an error occurred');
		console.log(err);
	} else {
		//console.log(list);
		for(i=0;i<list.length;i++) {
			if(path.extname(list[i]) == '.'+filter) {
				//console.log(path.extname(list[i]));
				console.log(list[i]);
			}
		}
	}
});

//console.log(directory);
//console.log(filter);