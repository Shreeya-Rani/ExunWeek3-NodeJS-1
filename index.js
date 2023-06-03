const fs = require('fs');

function searchFileForString(filename, searchString) {
  try {
    const fileData = fs.readFileSync(filename, 'utf8');
    return fileData.includes(searchString);
  } catch (err) {
    console.error('Error reading file:', err);
    return false;
  }
}

// Usage example
const filename = 'example.txt';
const searchString = process.argv[2]; // Command line argument

if (!searchString) {
  console.error('Please provide a search string as a command line argument.');
  process.exit(1);
}

const found = searchFileForString(filename, searchString);
console.log(found);