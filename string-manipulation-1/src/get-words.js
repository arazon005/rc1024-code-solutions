'use strict';
/* exported getWords */
/**
 * PSEUDOCODE:
 *
 * define a function 'getWords', with one argument 'string' of type string, that returns an array of strings.
 *  check if the argument is not an empty string
 *    if empty, return an array with no values
 *  else, split the string by spaces and add them to an array.
 *  return array
 *
 */
function getWords(string) {
  if (string === '') {
    const empty = [];
    return empty;
  }
  return string.split(' ');
}
