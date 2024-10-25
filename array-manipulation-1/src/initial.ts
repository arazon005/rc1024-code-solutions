/* exported initial */
function initial(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}
