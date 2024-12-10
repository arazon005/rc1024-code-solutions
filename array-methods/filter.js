'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const evens = numbers.filter((current) => {
  return current % 2 === 0;
});
console.log('evens:', evens);
const filteredNames = names.filter((current) => {
  let filter = true;
  for (let i = 0; i < current.length; i++) {
    if (current[i] === 'D' || current[i] === 'd') {
      filter = false;
    }
  }
  return filter;
});
console.log('filtered names', filteredNames);
