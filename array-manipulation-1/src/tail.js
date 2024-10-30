'use strict';
/* exported tail */
function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
}
