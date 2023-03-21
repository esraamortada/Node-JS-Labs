const fs = require('fs');

const directoryName = 'myDirectory';

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
  }
});
