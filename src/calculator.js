function add(numbers){

  if (numbers == "") {
    return 0;
  }

  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",")
    var sum = calculateSum(numberArray);
    return sum;
  }

  else

  return parseInt(numbers);
}

function calculateSum(numbers) {
  const _ = require("underscore");
  var sum = 0;

  _.each(numbers, function (number) {
      var n = parseInt(number);
      sum += n;
    });
  return sum;
}

module.exports = add;
