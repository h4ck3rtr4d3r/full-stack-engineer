function lifePhase(age) {
  if (age >= 0 && age <= 3) {
    return "baby";
  } else if (age >= 4 && age <= 12) {
    return "child";
  } else if (age >= 13 && age <= 19) {
    return "teen";
  } else if (age >= 20 && age <= 64) {
    return "adult";
  } else if (age >= 65 && age <= 140) {
    return "senior citizen";
  } else age < 0 && age > 140;
  {
    return "This is not a valid age";
  }
}
console.log(lifePhase(18));

// function lifePhase(age) {
//   if (age >= 0 && age <= 3) {
//     return "baby";
//   }
//   if (age >= 4 && age <= 12) {
//     return "child";
//   }
//   if (age >= 13 && age <= 19) {
//     return "teen";
//   }
//   if (age >= 20 && age <= 64) {
//     return "adult";
//   }
//   if (age >= 65 && age <= 140) {
//     return "senior citizen";
//   } else age < 0 && age > 140;
//   {
//     return "This is not a valid age";
//   }
// }
// console.log(lifePhase(56));
