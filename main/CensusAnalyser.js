const csv = require("csv-parser");
const fs = require("fs");
const csvToJson = require("csvtojson");

console.log ("Welcome to census analyser program");

function csvToJsonConversion(csvFile,callback){
    var promise = new Promise(function(resolve, reject) {
    csvToJson()
    .fromFile(csvFile)
    resolve("Conversion from csv to json is successful");
    reject('Your Promise Rejected')
    });
    promise.
    then(function () {
    return callback(data);
    }).
    catch(function () {
    console.log('There Some error has occured');
    });
}

function loadCSVFileData(csvFile, callback) {
    let count = 0;
    fs.createReadStream(csvFile)
    .pipe(csv())
    .on("data" , () => {
      count += 1;
    })
    .on("end", () => {
      return callback(count);
    });
}

function getSortedDataByState(csvFile, callback) {
    csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.State.localeCompare(b.State));
    return callback(data);
    });
}

function getSortedDataByStateCode(csvFile, callback) {
    csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.StateCode.localeCompare(b.StateCode));
    return callback(data);
    });
}

function getSortedDataByPopulation(csvFile, callback) {
    csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.Population - b.Population);
    return callback(data);
    });
}

function getSortedDataByDensity(csvFile, callback) {
    csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.DensityPerSqKm - b.DensityPerSqKm);
    return callback(data);
    });
}

function getSortedDataByArea(csvFile, callback) {
    csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.AreaInSqKm - b.AreaInSqKm);
    return callback(data);
    });
}

module.exports = {
  loadCSVFileData,
  getSortedDataByState,
  getSortedDataByStateCode,
  getSortedDataByPopulation,
  getSortedDataByDensity,
  getSortedDataByArea,
  csvToJsonConversion  
};
