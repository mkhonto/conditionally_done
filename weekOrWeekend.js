const assert = require("assert");
var weekOrWeekend = function(day){
  if (day <= 5 ){
  console.log(day);
   return "week";
}
else {
  console.log(day);
  return "weekend";
}
};
assert.equal(weekOrWeekend(5), "week");
assert.equal(weekOrWeekend(6), "weekend");
