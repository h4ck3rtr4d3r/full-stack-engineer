/**
The first interation method that we're going to learn is .forEach(). Aptly named .forEach() will execute the same code for each element of an array. 
 */

const groceries = ["brown sugar", "salt", "cranberries", "walnuts"];
groceries.forEach(function (groceryItem) {
  console.log(" - " + groceryItem);
});

/**
The code above will log a nicely formatted list of the groceries to the console. Let's explore the syntax of invoking .forEach()
- groceriers.forEach() calls the forEach method on the groceries array.
- .forEach()takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
- .forEach() loops through the array and excutes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
- The return value for .forEach() will always be undefined.
*/

// Another way to pass a callback for .forEach() is to use arrow function syntax.
groceries.forEach((groceryItem) => console.log(groceryItem));

// We can also define a function beforehand to be used as the callback function.
function printGrocery(elelment) {
  console.log(element);
}
groceries.forEach(printGrocery);

/**
 The above example uses a function declaraion but you can also use a function expression or arrow function as well.
*/

// Exercise

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below

fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}`));
