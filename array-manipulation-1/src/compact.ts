/* exported compact */
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
