/* exported tail */
/**
 * PSEUDOCODE:
 *
 * define a function 'tail', that takes one argument 'array' an array of unknown type, which returns
 * an array of unknown type.
 *  define an empty array of unknown type 'newArray'
 *  begin a loop to iterate through 'array' that starts from the second index
 *    add the value contained at the index of 'array' to 'newArray'
 *  return the value of 'newArray'
 */
function tail(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
}
