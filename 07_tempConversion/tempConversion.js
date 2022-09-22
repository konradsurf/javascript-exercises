const ftoc = function(tempInFrnht) {
  let tempInClcs = (tempInFrnht - 32) * (5 / 9);
  return ((Math.round(tempInClcs * 10)) / 10); 

};

const ctof = function(tempInClcs) {
  let tempInFrnht = (tempInClcs * 9 / 5) + 32;
  return ((Math.round(tempInFrnht * 10 )) / 10); 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
