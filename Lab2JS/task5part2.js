const fs = require('fs').promises;

// Read data from file asynchronously
async function readData() {
  try {
    const rawData = await fs.readFile('data.json');
    const data = JSON.parse(rawData);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readData();