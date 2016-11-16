const assert = require("assert");

var out = function(bBalance){
  if (bBalance > 4500){
    return "Go and get KFC!"
  }

  else if (bBalance < 4500 && bBalance > 1500){
    return "Go to PnP"
  }
  else{
    return "Two minute noodles today";
  }
};

assert.equal(out(4400), "Go to KFC");
assert.equal(out(1800), "Go to PnP");
assert.equal(out(), "Two minute noodles today");
