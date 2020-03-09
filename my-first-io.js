const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, (err, data) =>{
	if(err) throw err;
	console.log(data.toString().split('\n').length -1);
});
