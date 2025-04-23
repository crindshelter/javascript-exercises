const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
};

const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
  if (x < 0) {
    return 'ERROR';
  } else if (x === 0 || x === 1) {
    return 1;
  }

  result = 1;
  for (let i = x; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
