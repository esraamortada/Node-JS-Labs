const readline = require('readline');
const fs = require('fs');

const fileStream = fs.createReadStream('greet.txt');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});
