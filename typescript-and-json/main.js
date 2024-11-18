'use strict';
const array = [
  { isbn: '123', title: 'book title 1', author: 'me' },
  { isbn: '456', title: 'another book title', author: 'you' },
  { isbn: '789', title: 'a real book title', author: 'another person' },
];
console.log('array stringified:', JSON.stringify(array));
console.log('typeof stringified array:', typeof JSON.stringify(array));
const stringJSON =
  '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925}';
console.log('stringJSON value:', stringJSON);
console.log('stringJSON typeof:', typeof stringJSON);
const objectJSON = JSON.parse(stringJSON);
console.log('objectJSON value:', objectJSON);
console.log('objectJSON typeof:', typeof objectJSON);
