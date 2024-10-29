/* exported lastChars */
/**
 * Pseudocode:
 *
 * define a function 'lastChars' with two arguments 'length' of type number and 'string' of type string
 * which returns a string
 *  define an empty string to the variable 'newString'
 *  define variable "loopLength" as an undefined number
 *  check if the parameter 'length' is greater than the length of 'string'
 *    if it is, 'loopLength' is equal to the length of 'string'
 *    else, 'loopLength' is equal to 'length'
 *  loop through the characters of 'string' starting from the result of the length of string minus the value of 'loopLength'
 *    concatenate the value of the character at the index to 'newString'
 *  return the value of 'newString'
 */

function lastChars(length: number, string: string): string {
  let newString: string = '';
  let loopLength: number;
  if (length > string.length) {
    loopLength = string.length;
  } else {
    loopLength = length;
  }
  for (let i = string.length - loopLength; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
