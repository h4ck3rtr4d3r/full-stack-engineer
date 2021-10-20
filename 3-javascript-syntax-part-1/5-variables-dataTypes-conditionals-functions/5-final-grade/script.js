function finalGrade(grade1, grade2, grade3) {
  //Invalid Grade
  if (grade1 < 0 || grade1 > 100) {
    return "You have entered an invalid grade.";
  } else if (grade2 < 0 || grade2 > 100) {
    return "You have entered an invalid grade.";
  } else if (grade3 < 0 || grade3 > 100) {
    return "You have entered an invalid grade.";
  }

  // Average
  const average = (grade1 + grade2 + grade3) / 3;

  if (average > 0 && average < 59) {
    return "F";
  }
  if (average > 60 && average < 69) {
    return "D";
  }
  if (average > 70 && average < 79) {
    return "C";
  }
  if (average > 80 && average < 89) {
    return "B";
  }
  if (average > 90 && average < 100) {
    return "A";
  }
}

console.log(finalGrade(90, 73, 4));
