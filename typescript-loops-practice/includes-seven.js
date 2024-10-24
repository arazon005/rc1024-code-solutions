'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (const i of array) {
    if (i === 7) {
      return true;
    }
  }
  return false;
}
