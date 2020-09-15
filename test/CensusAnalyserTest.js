const assert = require("chai").assert;
const CensusAnalyser = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE = "./resources/IndiaStateCensusData.csv";
const INDIA_STATE_CODE_FILE = "./resources/IndiaStateCode.csv";
const US_STATE_CENSUS_FILE = "./resources/USCensusData.csv";

var obj = new CensusAnalyser();

describe("loadIndianStateCensusData", function () {
  it("givenIndiaCensusFile_WhenExpectedIsCorrect_ShouldReturnEqual", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE, function (data) {
      assert.equal(data, 29);
    });
  });
});

describe("loadIndianStateCensusData", function () {
  it("givenIndiaCensusFile_WhenExpectedIsIncorrect_ShouldReturnNotEqual", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE, function (data) {
      assert.notEqual(data, 30);
    });
  });
});

describe("loadIndianStateCodeData", function () {
  it("givenIndiaCodeFile_WhenExpectedIsCorrect_ShouldReturnEqual", function () {
    obj.loadCSVFileData(INDIA_STATE_CODE_FILE, function (data ) {
    assert.equal(data, 37);
    });
  });
});

describe("loadIndianStateCodeData", function () {
  it("givenIndiaCodeFile_WhenExpectedIsIncorrect_ShouldReturnNotEqual", function () {
      obj.loadCSVFileData(INDIA_STATE_CODE_FILE, function (data) {
      assert.notEqual(data, 40);
    });
  });
});

describe("loadIndianStateCensusData", function () {
  it("givenIndiaCensusFile_WhenSortedOnState_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByState(INDIA_STATE_CENSUS_FILE,function (data) {
        let result = data[0].State;
        assert.equal(result, "Andhra Pradesh"); 
      }
    );
  });
});

describe("loadIndianStateCensusData", function () {
  it("givenIndiaCensusFile_WhenSortedOnPopulation_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByPopulation(INDIA_STATE_CENSUS_FILE,function (data) {
        let result = data[data.length - 1].State;
        assert.equal(result, "Uttar Pradesh");
      }
    );
  });
});

describe("loadIndianStateCensusData", function () {
  it("givenIndiaCensusFile_WhenSortedOnDensity_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByDensity(INDIA_STATE_CENSUS_FILE,function (data){
        let result = data[data.length - 1].State;
        assert.equal(result, "Bihar");
      }
    );
  });
});

describe("loadIndianStateCensusData", function () {
  it("givenIndiaCensusFile_WhenSortedOnArea_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByArea(INDIA_STATE_CENSUS_FILE,function (data){
        let result = data[data.length - 1].State;
        assert.equal(result, "Rajasthan");
      }
    );
  });
});

describe("loadUSStateCensusData", function () {
  it("givenUSCensusFile_WhenExpectedIsCorrect_ShouldReturnEqual", function () {
      obj.loadCSVFileData(US_STATE_CENSUS_FILE, function (data) {
      assert.equal(data, 51);
    });
  });
});

describe("loadUSStateCensusData", function () {
  it("givenUSCensusFile_WhenExpectedIsIncorrect_ShouldReturnNotEqual", function () {
      obj.loadCSVFileData(US_STATE_CENSUS_FILE, function (data) {
      assert.notEqual(data, 60);
    });
  });
});

describe("loadUSStateCensusData", function () {
  it("givenUSCensusFile_WhenSortedOnPopulation_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByPopulation(US_STATE_CENSUS_FILE,function (data) {
        let result = data[data.length - 1].State;
        assert.equal(result, "California");
      }
    );
  });
});

describe("loadUSStateCensusData", function () {
  it("givenUSCensusFile_WhenSortedOnDensity_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByDensity(US_STATE_CENSUS_FILE,function (data) {
        let result = data[data.length - 1].State;
        assert.equal(result, "Wyoming");
      }
    );
  });
});

describe("loadUSStateCensusData", function () {
  it("givenUSCensusFile_WhenSortedOnArea_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.getSortedDataByArea(US_STATE_CENSUS_FILE,function (data) {
        let result = data[data.length - 1].State;
        assert.equal(result, "Wyoming");
      }
    );
  });
});

