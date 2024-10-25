'use strict';
/* exported getValues */
/**
 * define a function 'getValues', with one argument 'object' of type object, which will return an array of
 * type any
 *  define an empty array of type string 'values'
 *  begin a loop to iterate through 'object' properties
 *    add the value contained within the key of 'object' per loop
 *  return the value of 'values'
 */
function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
