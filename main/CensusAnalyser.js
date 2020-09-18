/*************************************************************
 *
 * Execution       : default node cmd> node CensusAnalyser.js
 * Purpose         : Analayze India & US Census Data
 *
 * @description    : Analayze India & US Census Data from csvfile
 *                   and sort data by state, population,
 *                   population density, TotalArea,...etc
 *                   to compute new stats accordingly.
 *
 * @file           : CensusAnalyser.js
 * @overview       : Analayze India & US Census Data
 * @module         : CensusAnalyser
 * @version        : 1.0
 * @since          : 16/11/2020
 *
 * **********************************************************/

/**
  * @description constant variable is declared to store csv-parse module
  * @const csv
  */
    const csv = require("csv-parser");
/**
  * @description constant variable is declared to store fs module
  * @const fs
  */
    const fs = require("fs");

/**
  * @description Class CensusAnalyser
  * @class CensusAnalyser
  */
class CensusAnalyser{
    /**
    * Load the data from the provided file 
    * @param {*} csvFile
    * @returns callback with the data in an array in JSON format
    */
    loadCSVFileData = (csvFile, callback) => {
    try{
    var resultArray = [];
    fs.createReadStream(csvFile)
    .pipe(csv())
    .on("data" , (row) => {
      resultArray.push(row);
    })
    .on("end",  () => {
      return callback(null,resultArray);
    });
    }catch(error){
        return callback(error,null);
    }
    };

    /**
      * Take data array and a field to compare to compare 
      * @param {*} dataArray, comparatorField
      * @returns callback with the data in an array in JSON format
      */
    sortData = (dataArray, comparatorField) => {
        dataArray.sort(comparatorField);
    };

    /**
      * @description Declared variable to sort csv file by different fields
      * @var fileComparators
      */
    fileComparators = {
        compareState: (a, b) => a.State.localeCompare(b.State),
        comparePopulation: (a, b) => a.Population - b.Population,
        compareDensity: (a, b) => a.DensityPerSqKm - b.DensityPerSqKm,
        compareArea: (a, b) => a.AreaInSqKm - b.AreaInSqKm,
        compareUSPopulationDensity: (a, b) =>
          a.Populationaensity - b.PopulationDensity,
        compareUSLandArea: (a, b) => b.Totalarea - a.Totalarea,
    };
}
module.exports = CensusAnalyser;
