const width: number = 3;
const height: number = 4;
const area: number = width * height;
console.log('value of area: ' + area);
console.log('type of area: ' + typeof area);

const bill: number = 20;
const payment: number = 15.99;
const change: number = bill - payment;
console.log('value of change:' + change);
console.log('type of change: ' + change);

const quizzes: number = 90;
const midterm: number = 100;
const final: number = 100;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade: ' + grade);
console.log('type of grade' + typeof grade);

const firstName: string = 'Abraham';
const lastName: string = 'Razon';
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName: ' + fullName);
console.log('type of fullName: ' + typeof fullName);

const pH: number = 7;
const isAcidic: boolean = pH <= 7;
console.log('value of isAcidic: ' + isAcidic);
console.log('type of isAcidic: ' + typeof isAcidic);

const headcount: number = 300;
const isSparta: boolean = headcount === 300;
console.log('value of isSparta: ' + isSparta);
console.log('type of isSparta' + typeof isSparta);

const motto: string = fullName + ' is the GOAT';
console.log('value of motto: ' + motto);
console.log('typeof motto: ' + typeof motto);
