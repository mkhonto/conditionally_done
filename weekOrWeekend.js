const assert = require("assert");
var weekOrWeekend = function(day){
  if (day === "tuesday"){
  console.log(day);
   return "week"
}
else {
  console.log(day);
  return "weekend"
}
};
assert.equal(weekOrWeekend("tuesday"), "week");
assert.equal(weekOrWeekend("sunday"), "weekend");
