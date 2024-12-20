/* exported setValue */
/**
 * define a function 'setValue', with three arguments 'object' of type object, 'key' of type string,
 * and 'value' of any type, which will return no value
 *  set the value contained within the property of 'key' inside 'object' to 'value'
 */

const setValue = (
  object: Record<string, unknown>,
  key: string,
  value: any
): void => {
  object[key] = value;
};
