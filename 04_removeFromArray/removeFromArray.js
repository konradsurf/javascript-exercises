const removeFromArray = function(array, ...args) {
  const excludedElements = args;
  // for (let i = 0; )
  
  for (let i = 0; i < excludedElements.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (excludedElements[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }


  // for (let i = 0; i < array.length; i++){
  //   for (let j = 0; j < excludedElements.length; j++) {
  //     if (array[i] == excludedElements[j]) {
  //       array.splice(i, 1);
  //     }
  //   }
  // }
  
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] == x){
  //     array.splice(i, 1);
  //   }
  // }
  return array;
  
};

// Do not edit below this line
module.exports = removeFromArray;
