const assert = require("chai").assert;
const CensusAnalyserController = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE = "./resources/IndiaStateCensusData.csv";

describe("It loads Indian State Census Data", function () {
  it("It loads the number of records in Indian census file", function () {
    CensusAnalyserController(INDIA_STATE_CENSUS_FILE, function (error, data) {
      assert.equal(data, 29);
    });
  });
});

describe("It loads Indian State Census Data", function () {
  it("It returns total records of Indian census data", function () {
    CensusAnalyserController(INDIA_STATE_CENSUS_FILE, function (err, data) {
      assert.notEqual(data, 30);
    });
  });
});
