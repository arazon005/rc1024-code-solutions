const colors: string[] = ['red', 'white', 'blue'];
for (let x: number = 0; x < colors.length; x++) {
  console.log(`value of colors[${x}]:`, colors[x]);
}
console.log(`America is ${colors[0]}, ${colors[1]}, ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, ${colors[2]}.`);
console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['Paul', 'Tommy', 'Michael', 'Joe'];
const numberOfStudents: number = students.length;
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`There are ${numberOfStudents} in the class.`);
console.log('The last student is', lastStudent);
console.log('value of students:', students);
