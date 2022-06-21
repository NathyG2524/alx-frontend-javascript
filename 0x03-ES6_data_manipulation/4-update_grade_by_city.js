/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(student, city, newGrades) {
  if (!Array.isArray(student)) {
    return 'student must be an array';
  }
  const loc = student.filter((element) => element.location === city);
  const stu = loc.map((element) => {
    const grades = newGrades.filter((gra) => gra.studentId === element.id);
    if (grades.length > 0) {
      if (grades[0].grade === 'undefined') {
        element.grade = grades[0].grade;
      }
    } else {
      element.grade = 'N/A';
    }
    return element;
  });
  return stu;
}
