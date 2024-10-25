/* exported tail */
function tail(array: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
}
