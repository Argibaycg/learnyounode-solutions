const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];
const extension = process.argv[3];

fs.readdir(inputPath, (err, files) => {
    files.forEach((fileString)=>{
        if(path.extname(fileString) === '.' + extension) {
            console.log(fileString);
        }
    });
});

