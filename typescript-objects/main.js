'use strict';
const student = {
  firstName: 'Abraham',
  lastName: 'Razon',
  age: 25,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('fullName ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Senior Election Clerk';
console.log('lives in irvine', student.livesInIrvine);
console.log('previous occupation ', student.previousOccupation);
console.log('student', student);
const vehicle = {
  make: 'honda',
  model: 'accord',
  year: 2020,
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('vehicle', vehicle);
console.log('typeof vehicle', typeof vehicle);
const pet = {
  name: 'Happy',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('pet', pet);
console.log('typeof pet', typeof pet);
