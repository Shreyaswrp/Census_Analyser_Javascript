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

function GetSortOrderByStateCode(csvFile,callback) { 
  csvToJson()
  .fromFile(csvFile)
  .then((data) => {
  data.sort((a, b) => a.StateCode - b.StateCode)
  return callback(data);
  });
} 

function GetSortOrderByPopulation(csvFile,callback) { 
  csvToJson()
  .fromFile(csvFile)
  .then((data) => {
  data.sort((a, b) => a.Population - b.Population)
  return callback(data);
  });
}

function GetSortOrderByPopulationDensity(csvFile,callback) { 
  csvToJson()
  .fromFile(csvFile)
  .then((data) => {
  data.sort((a, b) => a.PopulationDensity - b.PopulationDensity)
  return callback(data);
  });
}

function GetSortOrderByArea(csvFile,callback) { 
  csvToJson()
  .fromFile(csvFile)
  .then((data) => {
  data.sort((a, b) => a.AreaInSqKm - b.AreaInSqKm)
  return callback(data);
  });
}

module.exports = {
  loadCSVFileData,GetSortOrderByState,GetSortOrderByStateCode,GetSortOrderByPopulation,
  GetSortOrderByPopulationDensity,GetSortOrderByArea
};
 

