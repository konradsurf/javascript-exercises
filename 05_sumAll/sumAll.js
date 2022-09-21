const sumAll = function(numOne, numTwo) {
  let sum = 0;
  if (numOne < 0 || numTwo < 0){
    sum = 'ERROR';
  }
  else if (typeof numOne != 'number' || typeof numTwo != 'number'){
    sum = 'ERROR';
  } 
  else {
    for (i = Math.min(numOne, numTwo); i <= Math.max(numOne, numTwo); i++) {
      sum += i;
    }
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
