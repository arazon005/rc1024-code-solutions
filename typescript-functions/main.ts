function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));

function greet(name: string): string {
  return `Hey ${name}!`;
}
console.log(greet('Rob'));

const getArea = (width: number, height: number): number => {
  return width * height;
};

console.log(getArea(3, 4));

interface Person {
  firstName: string;
  lastName: string;
}
const me: Person = {
  firstName: 'Abraham',
  lastName: 'Razon',
};

const getFirstName = (person: Person): string => {
  return person.firstName;
};
console.log(getFirstName(me));
console.log(getFirstName({ firstName: 'Tommy', lastName: 'Lee' }));

const getLastElement = (array: Array<unknown>): any => {
  return array[array.length - 1];
};
console.log(getLastElement(['Tommy', 'Me,', 'Paul']));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
console.log('Calling getFirstName: ', callOtherFunction(getFirstName, me));
