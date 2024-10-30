/* exported initial */
/**
 * PSEUDOCODE:
 *
 * define a function 'initial', that takes one argument 'array' an array of unknown type, which returns
 * an array of unknown type.
 *  define an empty array of unknown type 'newArray'
 *  begin a loop to iterate through 'array' that ends looping at the index before the last
 *    add the value contained at the index of 'array' to newArray
 *  return the value of 'newArray'
 */
function initial(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}
