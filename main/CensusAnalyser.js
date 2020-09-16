const csv = require("csv-parser");
const fs = require("fs");
const csvToJson = require("csvtojson");

console.log ("Welcome to census analyser program");

class CensusAnalyser{

csvToJsonConversion(csvFile,callback){
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

loadCSVFileData(csvFile, callback) {
    try{
    let count = 0;
    fs.createReadStream(csvFile)
    .pipe(csv())
    .on("data" , () => {
      count += 1;
    })
    .on("end", () => {
      return callback(count);
    });
    }catch(err){
        return callback(err);
    }
}

getSortedDataByState(csvFile, callback) {
    try{
    this.csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.State.localeCompare(b.State));
    return callback(data);
    });
    }catch(err){
    return callback(err);
    }
}

getSortedDataByPopulation(csvFile, callback) {
    try{
    this.csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.Population - b.Population);
    return callback(data);
    });
    }catch(err){
        return callback(err);
    }
}

getSortedDataByDensity(csvFile, callback) {
    try{
    this.csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.DensityPerSqKm - b.DensityPerSqKm);
    return callback(data);
    });
    }catch(err){
        return callback(err);
    }
}

getSortedDataByArea(csvFile, callback) {
    try{
    this.csvToJsonConversion(csvFile,function (data){
    data.sort((a, b) => a.AreaInSqKm - b.AreaInSqKm);
    return callback(data);
    });
    }catch(err){
        return callback(err);
    }
}
}
module.exports = CensusAnalyser;
