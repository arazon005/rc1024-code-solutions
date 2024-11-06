'use strict';
/* exported getKeys */
/**
 * define a function 'getKeys', with one argument 'object' of type object, which will return an array
 *  define an empty array of type string 'keys'
 *  begin a loop to iterate through 'object' properties
 *    add each iteration's key value to 'keys'
 *  return the value of 'keys'
 */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
