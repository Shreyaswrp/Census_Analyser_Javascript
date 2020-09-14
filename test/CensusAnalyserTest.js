const assert = require("chai").assert;
const CensusAnalyserController = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE = "./resources/IndiaStateCensusData.csv";

describe("loadIndianStateCensusData", function () {
  it("it loads Indian census data", function () {
    CensusAnalyserController(INDIA_STATE_CENSUS_FILE, function (data) {
      assert.equal(data, 29);
    });
  });
});
