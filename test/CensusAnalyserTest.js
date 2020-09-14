const assert = require("chai").assert;
const CensusAnalyserController = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE = "./resources/IndiaStateCensusData.csv";
const INDIA_STATE_CODE_FILE = "./resources/IndiaStateCode.csv";

describe("It loads Indian State Census Data", function () {
  it("It loads the number of records in Indian census file", function () {
    CensusAnalyserController(INDIA_STATE_CENSUS_FILE, function ( data) {
      assert.equal(data, 29);
    });
  });
});

describe("loadIndianStateCensusData", function () {
  it("it loads Indian census data", function () {
    CensusAnalyserController(INDIA_STATE_CENSUS_FILE, function (data) {
      assert.notEqual(data, 30);
    });
  });
});

describe("It loads Indian State Code", function () {
  it("It loads total records of Indian state dode data", function () {
    CensusAnalyserController(INDIA_STATE_CODE_FILE, function (data) {
      assert.equal(data, 37);
    });
  });
});

describe("It loads Indian State Code Data", function () {
  it("It returns total records of Indian code data", function () {
    CensusAnalyserController(INDIA_STATE_CODE_FILE, function (data) {
      assert.notEqual(data, 40);
    });
  });
});
