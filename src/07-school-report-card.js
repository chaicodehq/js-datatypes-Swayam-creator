export function generateReportCard(student) {

  if (isNotObject(student)) return null;
  if (isNotObject(student.marks)) return null;
  if (typeof student.name !== "string" || student.name.trim() === "") return null;

  if (
    Object.values(student.marks).some(
      m => typeof m !== "number" || m < 0 || m > 100
    )
  ) {
    return null;
  }

  const { totalMarks, totalSub } = getTotalMarks(student);
  const name = student.name;

  const percentage = calculatePercentage(totalMarks, totalSub);
  const highestSubject = getHighest(student.marks);
  const lowestSubject = getLowest(student.marks);
  const passedSubjects = getPassSub(student.marks);
  const failedSubjects = getFailedSub(student.marks);


  let grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 40) grade = "D";
  else grade = "F";


  return {
    name,
    totalMarks,
    percentage,
    grade,
    highestSubject,
    lowestSubject,
    passedSubjects,
    failedSubjects,
    subjectCount: totalSub
  };
}



function isNotObject(obj) {
  return typeof obj !== "object" || obj === null || Object.keys(obj).length === 0;
}

function calculatePercentage(totalMarks, totalSub) {
  let res = (totalMarks / (totalSub * 100)) * 100;
  return parseFloat(res.toFixed(2));
}

function getTotalMarks(studObj) {
  const totalMarks = Object.values(studObj.marks).reduce((sum, val) => sum + val, 0);
  const totalSub = Object.values(studObj.marks).length;
  return { totalMarks, totalSub };
}

function getHighest(studentMarks) {
  return Object.entries(studentMarks).reduce((max, curr) =>
    curr[1] > max[1] ? curr : max
  )[0];
}

function getLowest(studentMarks) {
  return Object.entries(studentMarks).reduce((min, curr) =>
    curr[1] < min[1] ? curr : min
  )[0];
}

function getPassSub(studentMarks) {
  return Object.entries(studentMarks)
    .filter(([_, marks]) => marks >= 40)
    .map(([subject]) => subject);
}

function getFailedSub(studentMarks) {
  return Object.entries(studentMarks)
    .filter(([_, marks]) => marks < 40)
    .map(([subject]) => subject);
}