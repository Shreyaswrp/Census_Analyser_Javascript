var msg = "Welcome to census analyser program";
console.log(msg);

const csv = require("csv-parser");
const fs = require("fs");
const csvToJson = require("csvtojson");

function loadCSVFileData(csvFile, callback){
    let count = 0;
    fs.createReadStream(csvFile)
    .pipe(csv())
    .on("data", (row) => {
      count += 1;
    })
    .on("end", () => {
      console.log("Total count: " + count);
      return callback(count);
    });
}

function GetSortOrderByState(csvFile,callback) { 
      csvToJson()
      .fromFile(csvFile)
      .then((stateData) => {
      stateData.sort((a, b) => a.State - b.State)
      return callback(stateData);
      });
} 

module.exports = {
  loadCSVFileData,GetSortOrderByState
};
 

