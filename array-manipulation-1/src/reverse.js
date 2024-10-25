'use strict';
/* exported reverse */
function reverse(array) {
  const newArray = [];
  let count = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[count] = array[i];
    count++;
  }
  return newArray;
}
