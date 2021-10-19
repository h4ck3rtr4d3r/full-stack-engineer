// Having too many global variables can cause problems in a program.
// Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.
// Scope pollution makes it difficul to keep track of our different variables and sets us up for potential accidents.

// Example:
let num = 50;
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum();
console.log(num);

/**
 * You'll notice:
 * We have a variable num.
 * Inside the function body of logNum1(), we wan to declare a new variable but forgot to use the le keyword.
 * When we call logNum(), num gets reassigned to 100
 * The reassignment inside logNum() affects the global variable num.
 * Even though the reassignment is allowed and we won't get an error, if we decided to use num later, we'll unknowingly use the new value of num.
 * It’s best practice to not define variables in the global scope.
 */

// Exercise
const satellite = "The Moon";
const galaxy = "The Milk Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};
console.log(callMyNightSky());
console.log(stars);

/**
 * We changed the value of the global strs variable but it's not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.
 */
