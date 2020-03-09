const fs = require('fs');
const path = require('path');

module.exports = function documentFilter(inputPath, extension, callback){
    fs.readdir(inputPath, (err, files) => {
        if(err) {
            return callback(err);
        }

        let solution = [];
        
        files.forEach((fileString)=>{
            if(path.extname(fileString) === '.' + extension) {
                solution.push(fileString);
            }
        });
        return callback(null, solution);
    });
};