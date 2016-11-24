const assert = require("assert");
var displayEachRegNumber = function(numbers){
  var reg = numbers.split(", ");

  for (var i = 0; i < reg.length; i++){
    console.log(reg[i]);
  }
};
var registr = displayEachRegNumber("CJ 1234, 2345 GP, CA 6789, 5673 EC");
//assert.equal(displayEachRegNumber(registr), "CJ 1234, 2345 GP, CA 6789, 5673 EC");
