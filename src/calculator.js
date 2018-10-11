function add(numbers){

var numbers = numbers.replace(/\n|;|\/|\\|[.*]|[%]|[$]/g,",");
try {
  if (numbers == "") {
    return 0;
  }

  if(numbers.includes("-"))
  {
    var numberArray = numbers.split(",");
    var sum = calculateSum(numberArray);
    return sum;
  }
  if(numbers.includes(","||"\n"))
  {

    var numberArray = numbers.split(",");
    var sum = calculateSum(numberArray);
    return sum;
  }

  else

  return parseInt(numbers);
}
catch(errorMessage) {
  return errorMessage;
}
}

function calculateSum(numbers) {
  const _ = require("underscore");
  var sum = 0;
  var negativeArray = [];

  _.each(numbers, function (number) {
      var n = parseInt(number);
      if (n < 0) {
        negativeArray.push(n);
      }

      sum += n;
    });

    if(negativeArray.length != 0) {
        negativeNumbers(negativeArray);
      }

  return sum;
}

function negativeNumbers(negativeArray) {
  var errorMessage = 'Negatives not allowed: ';
  for (var i = 0; i < negativeArray.length; i++) {
    errorMessage += negativeArray[i]
    if (i != negativeArray.length - 1) {
      errorMessage += ',';
    }
  }
  throw errorMessage;
}

module.exports = add;
