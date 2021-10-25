/**
 * Arrays are lists that store data in JavaScript
 * Arrays are created with brackets
 * Each item inside of an array is at a numbered position, or index, starting at 0.
 * We can access one item in an array using its index, with syntax like: myArray[0]
 * We can also change an item in an array using its index, with syntax like: myArray[0] = 'new string'
 * Arrays have a lenght property, which allows you to see how many items are in an array
 * Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectivelly
 * Arrays have many methods that perform different tasks such .slice() and .shift();
 * Some built-in methods are mutating, meaning the method will change the array, while others are not mutating.
 * Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassing.
 * Arrays mutated inside of a function will keep that change even outside the function.
 * Arrays can be nested inside other arrays.
 * To access elements in nested arrays chain indices using bracket notation.
 * Learning how to work whit and manipulate arrays will help you work with chunks of data!
 */

const market = ["juice", "cookies", "fruits", "icecream"];
console.log(market.length);
const message = `I love go to the market and and buy ${market}`;
console.log(message);
