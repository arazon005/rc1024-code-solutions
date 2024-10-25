/* exported compact */
/**
 * PSEUDOCODE:
 *
 * define a function 'compact', with one argument 'array' an array of unknown type, which will return
 * an array of unknown type.
 *  define an empty array 'newArray' of unknown type
 *  define the variable 'count' as number value 0
 *  begin a loop that iterates through the values of 'array'
 *    conditional code based on if current value at index is a truthy value
 *      if true, add the value at the index to 'newArray'
 *      increment count by one
 *  return the value of 'newArray'
 */
function compact(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  let count: number = 0;
  for (const index of array) {
    if (index) {
      newArray[count] = index;
      count++;
    }
  }
  return newArray;
}
