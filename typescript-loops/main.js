'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('numbers to 10 array', getNumbersToTen());
console.log('numbers to 10 array call 2', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const numbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    numbers.push(currentNumber);
    currentNumber += 2;
  }
  return numbers;
}
console.log('even numbers to 20 array', getEvenNumbersToTwenty());
console.log('even numbers to 20 array call 2', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word + ' ';
    count++;
  }
  return repeated;
}
console.log(`repeating "pain" 5 times:`, repeatWord('pain', 5));
console.log(
  `repeating word call 2, repeating "cool" 6 times:`,
  repeatWord('pain', 5)
);
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(`logged "":`, logEachCharacter(''));
console.log(`logged "Abraham":`, logEachCharacter('Abraham'));
console.log(
  `logged "I ate lunch today.":`,
  logEachCharacter('I ate lunch today.')
);
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubling [1,2,3,4]', doubleAll([1, 2, 3, 4]));
console.log('doubling [3,6,9,12]', doubleAll([3, 6, 9, 12]));
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log('adding [1,2,3,4]', sumArray([1, 2, 3, 4]));
console.log('adding [3,6,9,12]', sumArray([3, 6, 9, 12]));
function reverseString(str) {
  let reversed = '';
  const reverseArray = [];
  for (const char of str) {
    reverseArray.unshift(char);
  }
  for (const char of reverseArray) {
    reversed += char;
  }
  return reversed;
}
console.log('reversing "wacca"', reverseString('wacca'));
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(
  'Keys of book:',
  getKeys({
    isbn: 'real isbn number',
    title: 'real book title',
    author: 'me',
  })
);
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log(
  'Values of book:',
  getValues({
    isbn: 'real isbn number',
    title: 'real book title',
    author: 'me',
  })
);
