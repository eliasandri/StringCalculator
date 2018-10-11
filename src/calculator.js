function add(numbers){

  if (numbers == "") {
    return 0;
  }

  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",")
    const _ = require("underscore");
    var sum = 0;

    _.each(numberArray, function (number) {
        var n = parseInt(number);
        sum += n;
      });
    return sum;
  }

  else

  return parseInt(numbers);
}

module.exports = add;
