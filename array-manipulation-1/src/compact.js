'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  let count = 0;
  for (const index of array) {
    if (index) {
      newArray[count] = index;
      count++;
    }
  }
  return newArray;
}
