const assert = require("assert");
var whichPlatform = function(route){
  switch(route){
    case "Langa":
      console.log(route);
      return "platform 1";
    case "Stellenbosch":
      console.log(route);
      return "platform 6";
    case "Wynberg":
      console.log(route);
      return "Platform 2";
    default:
      console.log(route);
      return "There is no train to " + route;
  }
}

assert.equal(whichPlatform("Langa"), "platform 1");
assert.equal(whichPlatform("Stellenbosch"), "platform 6");
assert.equal(whichPlatform("Wynberg"), "Platform 2");
assert.equal(whichPlatform("Parow"), "There is no train to " + "Parow");
