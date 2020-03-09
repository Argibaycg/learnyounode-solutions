const documentFilter = require('./mymodule.js');

const inputPath = process.argv[2];
const extension = process.argv[3];

documentFilter(inputPath,extension, function callback(err, solution) {
	if(err) throw err;
	solution.forEach(element => console.log(element));
});

// documentFilter(inputPath,extension, (err, solution) => {
// 	if(err) throw err;
// 	solution.forEach(element => console.log(element));
// });