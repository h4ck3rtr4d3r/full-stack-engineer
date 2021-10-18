/**
 * When a function is called, the computer will run through the function's code and evaluate the result of calling the function. By default that resulting value is undefined.
 * To pass back information from the function call, we use a return statement using a return keyword followed by the value that we wish to return.
 */

function rectangleArea(width, height) {
  let area = width * height;
  return area;
}
console.log(rectangleArea(5, 7));

/**
 * When a return statement is used in a function body, the execution of the function is stopped and the code that follws it wil not be executed. Look at the example:
 */

// function rectangleArea(width, height) {
//   if (width < 0 || height < 0) {
//     return "You need positive integers to calculate area!";
//   }
//   return width * height;
// }

function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
