// We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions.

// it makes our code easier to read and debug if necessary

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}
console.log(getFahrenheit(15));
/**
 * In the example above:
 * getFahrenheit() is called and 15 is passed as an argument
 * The code block inside of getFahrenheit() call multiplyByNineFifths() and passes 15 as an argument.
 * multiplyByNineFifths() takes the argument of 15 for the number parameter.
 * The code block inside of multipyByNineFifths() function multiplies 15 by (9/5), wich evaluates to 27.
 * 27 is returned back to the function call in getFahrenheit()
 * getFahreinheit() continues to execute. It adds 32 to 27, wich evaluates to 59.
 * Finally, 59 is returned back to the function call getFahrenheit(15).
 * Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.
 */

// Exercicies
function moniorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return moniorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
