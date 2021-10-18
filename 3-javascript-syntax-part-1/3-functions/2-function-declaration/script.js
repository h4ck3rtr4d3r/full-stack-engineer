// In JavaScript, there are many ways to create a function. One way is using a function declaration. A function declaration binds a functon to a name, or an identifier

// function greetWorld() {
//   console.log("Hello World!");
// }

/**
 * A function declaration consists of:
 * The function keyword;
 * The name of the function, or its identifier,followed by parentheses;
 * A function bodym or the block of statements required to perform a specific task, enclosed in the function's curly brackets, {}.
 *
 */

// We shoul be awere of the hoisting feature in JavaScript which allows access to function declarations before they're defined.
greetWorld();
function greetWorld() {
  console.log("Hello World!");
}
// Remember that hoisting is not a good practice.

function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas Tardes.");
}
