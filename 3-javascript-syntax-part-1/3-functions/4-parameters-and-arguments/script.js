/**
 * Some functions can take inputs and use the inputs to perform a task.
 * When declaring a function, we can specify its parameters. Paramenters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.
 */

function calculateArea(width, height) {
  console.log(width * height);
}
calculateArea(10, 6);

/**
 * Parameters are treated like functions variables within a function. In the example above width and height act as placeholders for values that will be multiplie    together.
 * When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments.
 * Arguments can be passed to the function as values or variables.
 */
// const rectWidth = 10;
// const rectHeight = 6;
// calculateArea(rectHeight, rectWidth);

function sayThanks(name) {
  console.log(
    `${name}, thank you for your purchase! We appreciate your business.`
  );
}
sayThanks("Hacker");
