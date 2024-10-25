/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  let count: number = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[count] = array[i];
    count++;
  }
  return newArray;
}
