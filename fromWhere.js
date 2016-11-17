const assert = require("assert");
var fromWhere = function(regNumbers){
var regis = "CY 987654";
  switch (regNumbers){
    case "CY 567894":
      //console.log(regNumbers);
      return "Bellville";

    case "CJ 123456":
      //console.log(regNumbers);
      return "Paarl";

    case "CA 342567":
      //console.log(regNumbers);
      return "Cape Town";

    default:
      //console.log(regNumbers.substring(0, 2));
      return "Some Other Place!";
  }
}

assert.equal(fromWhere("CY 567894"), "Bellville");
assert.equal(fromWhere("CJ 123456"), "Paarl");
assert.equal(fromWhere("CA 342567"), "Cape Town");
//assert.equal(fromWhere();
