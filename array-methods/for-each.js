'use strict';
/* eslint-disable @typescript-eslint/no-unused-vars */
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((current, index) => {
  console.log(current);
});
values.forEach((current, index) => {
  console.log(values[values.length - 1 - index]);
});
