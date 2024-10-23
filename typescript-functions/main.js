'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
function greet(name) {
  return `Hey ${name}!`;
}
console.log(greet('Rob'));
const getArea = (width, height) => {
  return width * height;
};
console.log(getArea(3, 4));
const me = {
  firstName: 'Abraham',
  lastName: 'Razon',
};
const getFirstName = (person) => {
  return person.firstName;
};
console.log(getFirstName(me));
console.log(getFirstName({ firstName: 'Tommy', lastName: 'Lee' }));
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(getLastElement(['Tommy', 'Me,', 'Paul']));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log('Calling getFirstName: ', callOtherFunction(getFirstName, me));
