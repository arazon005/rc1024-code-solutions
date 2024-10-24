'use strict';
/* exported countdown */
function countdown(num) {
  const cd = [];
  for (let i = num; i >= 0; i--) {
    cd.push(i);
  }
  return cd;
}
