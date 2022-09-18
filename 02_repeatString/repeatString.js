const repeatString = function(string, num) {
  let repeatingString = string;
  if (num == 0) {
    repeatingString = '';
  }
  else if (num < 0) {
    repeatingString = 'ERROR';
  }
  for (let i = 1; i < num; i++){
    repeatingString += string;
  }
  return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
