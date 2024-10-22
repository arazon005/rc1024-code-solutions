'use strict';
const colors = ['red', 'white', 'blue'];
for (let x = 0; x < colors.length; x++) {
  console.log(`value of colors[${x}]:`, colors[x]);
}
console.log(`America is ${colors[0]}, ${colors[1]}, ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, ${colors[2]}.`);
console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);
const students = ['Paul', 'Tommy', 'Michael', 'Joe'];
const numberOfStudents = students.length;
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`There are ${numberOfStudents} in the class.`);
console.log('The last student is', lastStudent);
console.log('value of students:', students);
