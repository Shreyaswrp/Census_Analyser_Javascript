var msg = "Welcome to census analyser program";
console.log(msg);

module.exports = function (csvFile, callback) {
  const csv = require("csv-parser");
  const fs = require("fs");
  let count = 0;

  fs.createReadStream(csvFile)
    .pipe(csv())
    .on("data", (row) => {
      count += 1;
    })
    .on("end", () => {
      console.log("Total count: " + count);
      return callback(null, count);
    });
};
