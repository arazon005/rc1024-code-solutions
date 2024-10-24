/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}
