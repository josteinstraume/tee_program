var fs = require('fs');

console.log('Enter text to be saved and output into ' + process.argv[2] + ".");
process.stdin.pipe(process.stdout);
process.stdin.pipe(fs.createWriteStream(process.argv[2]));