/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str1 = str.trim().toLowerCase().replace(/[^a-z0-9]/g, '').split("");
  const n = str1.length;
  for (i = 0; i < str1.length; i++) {
    if (str1[i] !== str1[n - i - 1])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
