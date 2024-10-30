/* exported last */
/**
 * PSEUDOCODE:
 *
 * define a function 'last', that takes one argument 'array' an array of unknown type, which returns
 * an unknown type.
 *  return the value of the last index of 'array'
 */
function last(array: unknown[]): unknown {
  return array[array.length - 1];
}
