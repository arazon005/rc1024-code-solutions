'use strict';
/* exported truncate */
/**
 * Pseudocode:
 *
 * define function 'truncate' with two arguments 'length' of type number and 'string' of type string,
 * which returns a string
 *  define a variable 'shortened' of type string which has no value
 *  loop through the characters in 'string' up to 'length'
 *    for each loop, concatenate the character contained at the index to 'shortened'
 *  after the loop, append '...' to shortened
 *  return shortened
 */
function truncate(length, string) {
  let shortened = '';
  let i = 0;
  while (i < length && i < string.length) {
    if (string) {
      shortened += string[i];
    }
    i++;
  }
  shortened += '...';
  return shortened;
}
