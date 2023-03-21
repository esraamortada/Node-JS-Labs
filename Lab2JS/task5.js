const fs = require('fs');

// Read data from file synchronously
const rawData = fs.readFileSync('data.json');
const data = JSON.parse(rawData);

console.log(data);



