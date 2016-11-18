const assert = require("assert");

var transportFee = function(shift){
  if (shift === 20) {
      console.log(shift);
      return "morning"

  } else if (shift >= 10) {
      console.log(shift);
      return "afternoon"

  } else {
      return "nothing"
  }
  };

assert.equal(transportFee(20), "morning");
assert.equal(transportFee(10), "afternoon");
//assert.equal(transportFee(), "nothing");
