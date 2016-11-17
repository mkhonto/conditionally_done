const assert = require("assert");

var lunchWhere = function(bankBalance){
  if (bankBalance > 4500){
    return "Go and get KFC!"
  }

  else if (bankBalance < 4500 && bankBalance > 1500){
    return "Go to PnP"
  }
  else{
    return "Two minute noodles today";
  }
};

assert.equal(lunchWhere(4800), "Go and get KFC!");
assert.equal(lunchWhere(1800), "Go to PnP");
assert.equal(lunchWhere(), "Two minute noodles today");
