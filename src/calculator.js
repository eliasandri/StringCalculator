function add(numbers){

var numbers = numbers.replace(/\n|;|\/|\\|[.*]|[%]|[$]/g,",");
var numberArray = numbers.split(",");

try {
  if (numbers == "") {
    return 0;
  }

  if(numbers.includes("-"))
  {
    return negativeArray = createNegativeArray(numberArray);
  }

    var sum = calculateSum(numberArray);
    return sum;

}
catch(errorMessage) {
  return errorMessage;
}
}

function createNegativeArray(numberArray) {
  const _ = require("underscore");
  var negativeArray = [];

  _.each(numberArray, function (number) {
      var n = parseInt(number);
      if (n < 0) {
        negativeArray.push(n);
      }
  });

  return throwErrorMessageForNegativeNumbers(negativeArray);
}

function calculateSum(numbers) {
  const _ = require("underscore");
  var sum = 0;

  _.each(numbers, function (number) {
      var n = parseInt(number);
      if (n > 1000 || isNaN(n)) {
        n = 0;
      }
      sum += n;
    });

  return sum;
}

function throwErrorMessageForNegativeNumbers(negativeArray) {
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
