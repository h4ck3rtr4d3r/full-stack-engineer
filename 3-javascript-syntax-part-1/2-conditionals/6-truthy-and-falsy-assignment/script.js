// let defaultName;
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = "Stranger";
// }

// let defaultName = username || "Stranger";
/**
 * Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stanger' if username is falsy. This concept is also referred to as short-curcuit evaluation
 */
let tool = "";
let writingUtensil = tool || "pen";
console.log(`The ${writingUtensil} is mightier than the sword.`);
