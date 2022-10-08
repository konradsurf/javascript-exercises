const reverseString = function(string) {
  let newString = '';
  for (i = string.length - 1; i >= 0; i--){
    newString += string[i];
  }
  return newString;
};

/* 
rather than using a for loop, TOP's solution used a reverse method
(in addition to split and join).  The reverse method is a an array
method, but the split method returns an array that the reverse
method was used on
*/

// Do not edit below this line
module.exports = reverseString;
