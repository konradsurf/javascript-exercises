const repeatString = function(string, num) {
  let repeatingString = string;
  if (num == 0) {
    repeatingString = '';
  }
  else if (num < 0) {
    repeatingString = 'ERROR';
  }
// this only works when num =1 b/c i assigned string argument to repeatString variable - see TOP solution below
  for (let i = 1; i < num; i++){    
      repeatingString += string;
  }
  return repeatingString;
};

// const repeatString = function(word, times) {
//   if (times < 0) return 'ERROR';
//   let string = '';
//   for (let i = 0; i < times; i++) {  
//     string += word;
//   }
//   return string;
// };

// Do not edit below this line
module.exports = repeatString;
