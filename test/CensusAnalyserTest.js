const assert = require("chai").assert;
const CensusAnalyser = require("../main/CensusAnalyser");
const INDIA_STATE_CENSUS_FILE = "./resources/IndiaStateCensusData.csv";
const INDIA_STATE_CODE_FILE = "./resources/IndiaStateCode.csv";
const US_STATE_CENSUS_FILE = "./resources/USCensusData.csv";

var obj = new CensusAnalyser();

describe("loadIndianStateCensusData", function () {
    it("givenIndiaCensusFile_WhenExpectedIsCorrect_ShouldReturnEqual", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE, function (err,data) {
      if (err) {
          return loadCSVFileData(INDIA_STATE_CENSUS_FILE, callback);
      }
      assert.equal(data.length, 29);
      });
    });
    
    it("givenIndiaCensusFile_WhenExpectedIsIncorrect_ShouldReturnNotEqual", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE, function (err,data) {
      if (err) {
          return loadCSVFileData(INDIA_STATE_CENSUS_FILE, callback);
      }
      assert.notEqual(data, 30);
      });
    });

    it("givenIndiaCensusFile_WhenSortedOnState_ShouldReturnCorrectStateInJSONFormat", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE,function (err,data) {
      if (err) {
          return loadCSVFileData(INDIA_STATE_CENSUS_FILE, callback);
      }
      obj.sortData(data,obj.fileComparators.compareState);
      let result = data[0].State;
      assert.equal(result, "Andhra Pradesh"); 
      });
    });

    it("givenIndiaCensusFile_WhenSortedOnPopulation_ShouldReturnCorrectStateInJSONFormat", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE,function (err,data) {
      if (err) {
          return loadCSVFileData(INDIA_STATE_CENSUS_FILE, callback);
      }
      obj.sortData(data,obj.fileComparators.comparePopulation);
      let result = data[data.length - 1].State;
      assert.equal(result, "Uttar Pradesh");
      });
    });

    it("givenIndiaCensusFile_WhenSortedOnDensity_ShouldReturnCorrectStateInJSONFormat", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE,function (err,data){
      if (err) {
          return loadCSVFileData(INDIA_STATE_CENSUS_FILE, callback);
      }
      obj.sortData(data,obj.fileComparators.compareDensity);
      let result = data[data.length - 1].State;
      assert.equal(result, "Bihar");
      });
    });

    it("givenIndiaCensusFile_WhenSortedOnArea_ShouldReturnCorrectStateInJSONFormat", function () {
      obj.loadCSVFileData(INDIA_STATE_CENSUS_FILE,function (err,data){
      if (err) {
          return loadCSVFileData(INDIA_STATE_CENSUS_FILE, callback);
      }
      obj.sortData(data,obj.fileComparators.compareArea);
      let result = data[data.length - 1].State;
      assert.equal(result, "Rajasthan");
      });
    });
});

describe("loadIndianStateCodeData", function () {
  it("givenIndiaCodeFile_WhenExpectedIsCorrect_ShouldReturnEqual", function () {
    obj.loadCSVFileData(INDIA_STATE_CODE_FILE, function (err,data ) {
    if (err) {
        return loadCSVFileData(INDIA_STATE_CODE_FILE, callback);
    }
    assert.equal(data.length, 37);
    });
  });

  it("givenIndiaCodeFile_WhenExpectedIsIncorrect_ShouldReturnNotEqual", function () {
    obj.loadCSVFileData(INDIA_STATE_CODE_FILE, function (err,data) {
    if (err) {
        return loadCSVFileData(INDIA_STATE_CODE_FILE, callback);
    } 
    assert.notEqual(data.length, 40);
    });
  });
  });

describe("loadUSStateCensusData", function () {
  it("givenUSCensusFile_WhenExpectedIsCorrect_ShouldReturnEqual", function () {
      obj.loadCSVFileData(US_STATE_CENSUS_FILE, function (err,data) {
      if (err) {
          return loadCSVFileData(US_STATE_CENSUS_FILE, callback);
      }
      assert.equal(data.length, 51);
    });
  });

  it("givenUSCensusFile_WhenExpectedIsIncorrect_ShouldReturnNotEqual", function () {
      obj.loadCSVFileData(US_STATE_CENSUS_FILE, function (err,data) {
      if (err) {
          return loadCSVFileData(US_STATE_CENSUS_FILE, callback);
      }
      assert.notEqual(data.length, 60);
    });
  });

  it("givenUSCensusFile_WhenSortedOnPopulation_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.loadCSVFileData(US_STATE_CENSUS_FILE,function (err,data) {
        if (err) {
            return loadCSVFileData(US_STATE_CENSUS_FILE, callback);
        }
        obj.sortData(data,obj.fileComparators.comparePopulation);
        let result = data[data.length - 1].State;
        assert.equal(result, "California");
      }
    );
  });

  it("givenUSCensusFile_WhenSortedOnDensity_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.loadCSVFileData(US_STATE_CENSUS_FILE,function (err,data) {
        if (err) {
            return loadCSVFileData(US_STATE_CENSUS_FILE, callback);
        }
        obj.sortData(data,obj.fileComparators.compareUSPopulationDensity);
        let result = data[data.length - 1].State;
        assert.equal(result, "Wyoming");
      }
    );
  });

  it("givenUSCensusFile_WhenSortedOnArea_ShouldReturnCorrectStateInJSONFormat", function () {
        obj.loadCSVFileData(US_STATE_CENSUS_FILE,function (err,data) {
        if (err) {
            return loadCSVFileData(US_STATE_CENSUS_FILE, callback);
        }
        obj.sortData(data,obj.fileComparators.compareUSLandArea);
        let result = data[data.length - 1].State;
        assert.equal(result, "Wyoming");
      }
    );
  });
});

