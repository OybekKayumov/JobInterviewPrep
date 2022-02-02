const reverseStr = str =>
str
  .toLowerCase()
  .split('')
  .reverse()
  .join('');

module.exports = reverseStr;