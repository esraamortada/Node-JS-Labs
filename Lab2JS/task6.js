const fs = require('fs');

fs.writeFile('info.txt', 'hello iti', function (err) {
  if (err) throw err;
  console.log('File saved!');
});
