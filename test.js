const fs = require('fs');

fs.writeFile("/Users/luosrestil/Desktop/myfile.txt", `${new Date().toLocaleTimeString()}`, {flag: 'a'}, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("The file was saved.");
});