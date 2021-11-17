/*
We sometimes want to find the location of an element in an array. That's where the .findIndex() method comes in. Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
*/

const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

/*
- jumbledNums. is an array that contains elements that are numbers.
- const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
- The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
- num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Let's take a look at what lessThanTen evaluates to:
*/

console.log(lessThanTen); // Outut: 3

// If we check what element has index 3 in the jumbledNums array, we see that it is 5.
console.log(jumbledNums[3]); // Output: 5

/*
Great! We found the element that evaluates to true in the callback function.
if there isn't a single elemente in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

// Exercise: Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

/*
Exercise 2 : Let’s see if we can find the index of the first animal that starts with the letter 's'.
Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
*/ 
 const startsWithS = animals.findIndex(animal => {
   return animal [0] === 's';
 });
 