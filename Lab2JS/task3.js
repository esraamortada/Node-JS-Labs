const fs = require('fs');


fs.writeFile('test.txt', 'Hello, world!', err => {
  if (err) throw err;
  console.log('Test file created with dummy data');
  
  
  fs.rename('test.txt', 'info.txt', err => {
    if (err) throw err;
    console.log('File renamed!');
  });
});
