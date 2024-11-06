/* exported toObject */
/**
 * PSEUDOCODE:
 *
 * define a function 'toObject', with one argument 'keyValuePair' an array containing two elements;
 * a string and any other value; the function will return an object
 *  define a new string 'key' equal to the value of the value of the first index of 'keyValuePair'
 *  define a new string 'value' equal to the second index of 'keyValuePair'
 *  declare a new object 'newObject' with no properties
 *  add the 'key' property to 'newObject' using the value in 'value'
 *  return the value of 'newObject'
 */

function toObject(keyValuePair: any[]): object {
  const key: string = keyValuePair[0];
  const value: any = keyValuePair[1];
  const newObject = {};
  newObject[key] = value;
  return newObject;
}
