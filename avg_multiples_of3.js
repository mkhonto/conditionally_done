var multipesOfTheeSums = 0;
var numberCounter = 0;
for (var i = 1; i <= 300; i++){
  if (i % 3 === 0){
    numberCounter++;
    multipesOfTheeSums += i;
  }
}
var avg = multipesOfTheeSums / numberCounter;
// the avg variable contains the average
console.log(avg);
