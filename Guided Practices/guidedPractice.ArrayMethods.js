/*
Rank students
on a universtiy website

Create a university website with student rankings,
with 5 being the highest mark, 1 being the lowest,
and 3.5 being the passing grade. Don't include
students who did not pass.

*/

/* MY SOLUTION ---------->>

filter then sort

// const arrayGrades = [2.5, 3.5, 4, 5, 3, 3.25, 4.5, 4.3, 4.2, 1.0, 2.2, 4.3];
// console.log(arrayGrades);
// const filterArray = arrayGrades.filter(function (value) {
//   return value >= 3.5;
// });

// console.log(filterArray);

// const sortedArray = filterArray.sort(function (a, b) {
//   return b - a;
// });

// console.log(sortedArray);

*/

// Code perform on guided practice

var students = [
  {
    FirstName: "Albert",
    LastName: "Einstein",
    Subjects: [
      {
        SubjectName: "Math",
        Grades: [
          {
            term: "First Term",
            grade: 4.0,
          },
          {
            term: "Second Term",
            grade: 3.1,
          },
        ],
      },
      {
        SubjectName: "Science",
        Grades: [
          {
            term: "First Term",
            grade: 4.3,
          },
          {
            term: "Second Term",
            grade: 3.3,
          },
        ],
      },
    ],
  },
  {
    FirstName: "Tony",
    LastName: "Stark",
    Subjects: [
      {
        SubjectName: "Math",
        Grades: [
          {
            term: "First Term",
            grade: 4.6,
          },
          {
            term: "Second Term",
            grade: 3.1,
          },
        ],
      },
      {
        SubjectName: "Science",
        Grades: [
          {
            term: "First Term",
            grade: 4.9,
          },
          {
            term: "Second Term",
            grade: 4.2,
          },
        ],
      },
    ],
  },
  {
    FirstName: "Earl",
    LastName: "Butlay",
    Subjects: [
      {
        SubjectName: "Math",
        Grades: [
          {
            term: "First Term",
            grade: 4.3,
          },
          {
            term: "Second Term",
            grade: 4.0,
          },
        ],
      },
      {
        SubjectName: "Science",
        Grades: [
          {
            term: "First Term",
            grade: 3.5,
          },
          {
            term: "Second Term",
            grade: 4.5,
          },
        ],
      },
    ],
  },
];

var passedStudents = [];

students.forEach((element) => {
  //console.log(element.FirstName);
  let gradesPerSubject = element.Subjects.map((subject) => {
    const totalGrades = subject.Grades.reduce(
      (prev, term) => prev.grade + term.grade
    );
    return totalGrades;
  });

  //console.log(gradesPerSubject);

  const overallGrades = gradesPerSubject.reduce(
    (prev, current) => prev + current
  );
  //console.log(overallGrades);
  const averageGrade = overallGrades / (element.Subjects.length * 2);
  //console.log(averageGrade);

  if (averageGrade >= 3.5) {
    passedStudents.push({ ...element, averageGrade: averageGrade.toFixed(2) });
  }
});

console.log(passedStudents);

// const rankedStudents = passedStudents.sort(
//   (a, b) => b.averageGrade - a.averageGrade
// ); --> greatest to least

//console.log(passedStudents);

const rankedStudents = passedStudents.sort(
  (a, b) => a.averageGrade - b.averageGrade
); //least to greatest

console.log(passedStudents.reverse());
