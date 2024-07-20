/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  let a = str.toLowerCase().split("");
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (arr.includes(a[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;