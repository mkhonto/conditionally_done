//Waking up in the morning time
//What i am going to do, in the morning, afternoon and evening
//Where am i suppose to be at what time
//Reading times

const assert = require("assert");
var decisions = function(hour){
if (hour < 12) {
    console.log(hour);
    return "morning"

} else if (hour >= 12) {
    console.log(hour);
    return "afternoon"
}
else {
  //console.log(hour);;
  return "evening"
}
};
assert.equal(decisions(11), "morning");
assert.equal(decisions(14), "afternoon");
//assert.equal(decisions(0), "evening");
