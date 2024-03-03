const path = require("path");
const fs = require("fs");
const lnk = require("lnk");

// delete old soft link
fs.unlinkSync(path.resolve(__dirname, "../build/node.js"));

// soft link build/node.js -> build/server/node.js
lnk.sync(
  [path.resolve(__dirname, "../build/server/node.js")],
  path.resolve(__dirname, "../build")
);

// show success
console.log(`Soft Link build/node.js -> build/server/node.js`);
