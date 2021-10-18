// In a function exŕession, teh function name is usually omitted. A function with no name is called an anonymous function.
// A function expression is often store in a variable in order to refer to it.

const calculateArea = function (width, height) {
  const area = width * height;
  return area;
};
console.log(calculateArea(2, 2));

/** To declare a function expression:
 * Declare a variable to make the variable's name be the name, or identifier, of your function. It's better use const for that.
 * Assign as that variable's value an anonymous function created by using the function keyword followd by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.
 * To invoke a function expression, write the name of the variable in which the function is stored followed by parantheses enclosing any arguments beig passed into thje function.
 * Remember that functions expressions are not hoisted so they cannot be called before they are defined.
 */

// Exercices
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));
