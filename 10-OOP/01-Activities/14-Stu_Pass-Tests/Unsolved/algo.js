function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  const strSplit = str.split("");
  const strReversed = strSplit.reverse();
  const strJoin = strReversed.join("");
  return strJoin;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

module.exports = Algo;
