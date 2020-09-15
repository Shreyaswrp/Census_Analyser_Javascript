const assert = require("chai").assert;
const CensusAnalyserController = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE = "./resources/IndiaStateCensusData.csv";
const INDIA_STATE_CODE_FILE = "./resources/IndiaStateCode.csv";
const US_STATE_CENSUS_FILE = "./resources/USCensusData.csv";

describe("It loads Indian State Census Data", function () {
  it("It loads the number of records in Indian census file", function () {
    CensusAnalyserController.loadCSVFileData(INDIA_STATE_CENSUS_FILE, function ( data) {
      assert.equal(data, 29);
    });
  });
});

describe("loadIndianStateCensusData", function () {
  it("it loads Indian census data", function () {
    CensusAnalyserController.loadCSVFileData(INDIA_STATE_CENSUS_FILE, function (data) {
      assert.notEqual(data, 30);
    });
  });
});

describe("It loads Indian State Code", function () {
  it("It loads total records of Indian state dode data", function () {
    CensusAnalyserController.loadCSVFileData(INDIA_STATE_CODE_FILE, function (data) {
      assert.equal(data, 37);
    });
  });
});

describe("It loads Indian State Code Data", function () {
  it("It returns total records of Indian code data", function () {
    CensusAnalyserController.loadCSVFileData(INDIA_STATE_CODE_FILE, function (data) {
      assert.notEqual(data, 40);
    });
  });
});

describe("IndianStateCensusSorting", function () {
  it("It sorts the state data in alphabetic order", function () {
    CensusAnalyserController.GetSortOrderByState(INDIA_STATE_CENSUS_FILE, function (data) {
        let result =data[data.length-1].State
        assert.equal(result, "West Bengal");
    });
  });
});

describe("Indian State Code Sorting", function () {
  it("It sorts the state code data in JSON Format", function () {
    CensusAnalyserController.GetSortOrderByStateCode(INDIA_STATE_CODE_FILE, function (data) {
        let result =data[data.length-1].StateCode
        assert.equal(result, "WB");
    });
  });
});

describe("Indian State Census Sorting", function () {
  it("It sorts the state population data in JSON Format", function () {
    CensusAnalyserController.GetSortOrderByPopulation(INDIA_STATE_CENSUS_FILE, function (data) {
        let result =data[data.length-1].State
        assert.equal(result, "Uttar Pradesh");
    });
  });
});

describe("Indian State Census Sorting", function () {
  it("It sorts the state population density data in JSON Format", function () {
    CensusAnalyserController.GetSortOrderByPopulationDensity(INDIA_STATE_CENSUS_FILE, function (data) {
        let result =data[data.length-1].State
        assert.equal(result, "Sikkim");
    });
  });
});

describe("Indian State Census Sorting", function () {
  it("It sorts the state area data in JSON Format", function () {
    CensusAnalyserController.GetSortOrderByArea(INDIA_STATE_CENSUS_FILE, function (data) {
        let result =data[data.length-1].State
        assert.equal(result, "Rajasthan");
    });
  });
});

describe("It loads US State Census Data", function () {
  it("It loads the number of records in US census file", function () {
    CensusAnalyserController.loadCSVFileData(US_STATE_CENSUS_FILE, function ( data) {
      assert.equal(data, 51);
    });
  });
});