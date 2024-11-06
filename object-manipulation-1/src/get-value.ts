/* exported getValue */
/**
 * define a function 'getValue', with two arguments 'object' of type object, and 'key' of type string, which
 * will return any value type
 *  return the value contained within the property of 'key' inside 'object'
 */

const getValue = (object: Record<string, unknown>, key: string): any =>
  object[key];
