'use strict';
const heroes = ['Batman', 'Spiderman', 'Iron Man', 'Dr Strange'];
let randomNumber = Math.random();
randomNumber = randomNumber * 4;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex Result: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero Result: ', randomHero);
const library = [
  { title: 'real book name', author: 'me' },
  { title: 'Wuthering Heights', author: 'Emily Bronte' },
];
const lastBook = library.pop();
console.log('lastBook value: ', lastBook);
const firstBook = library.shift();
console.log('firstBook value: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1);
console.log('library array: ', library);
const fullName = 'Abraham Razon';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName value:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName value:', sayMyName);
const employee = {
  name: 'Paul',
  age: 28,
  position: 'Senior Manager',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys values:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs values:', employeePairs);
