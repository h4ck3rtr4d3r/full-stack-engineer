let myVariable = "I Exist!";
if (myVariable) {
  console.log(myVariable);
} else {
  console.log("The variable does not exist.");
}

/**
 * The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly tge value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.
 * The list of falsy values include:
 * 0
 * Empty strings like "" or ''
 * null which represent when there is no value at all
 * undefined which represent when a declared varable lacks a value
 * NaN, or Not a Number
 */

let numberOfApples = 0;
if (numberOfApples) {
  console.log("Let us eat apples!");
} else {
  console.log("No apples left!");
}
// The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.
