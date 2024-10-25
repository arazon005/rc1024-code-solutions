/* exported reverse */
/**
 * PSEUDOCODE:
 *
 * define a function 'reverse', that takes one argument 'array' an array of unknown type, which returns
 * an array unknown type.
 *  define an empty array of unknown type 'newArray'
 *  begin a loop that starts from the last index of 'array', until it iterates to the first value of 'array'
 *    add the value contained at current index to 'newArray'
 *  return the value of 'newArray'
 */
function reverse(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  let count: number = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[count] = array[i];
    count++;
  }
  return newArray;
}
