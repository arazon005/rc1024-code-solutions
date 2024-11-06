'use strict';
/* exported reverseWord */
/**
 * PSUEDOCODE:
 *
 * define a function 'reverseWord', with one argument 'word' of type string, which will return a string.
 *  define an empty string variable named 'reverse'
 *  begin a loop that goes through each letter of 'word'
 *    concatenate the letter of the loop to the value of 'reverse', and assign that value to 'reverse'
 *  return the value of 'reverse'
 */
function reverseWord(word) {
  let reverse = '';
  for (const char of word) {
    reverse = char + reverse;
  }
  return reverse;
}
