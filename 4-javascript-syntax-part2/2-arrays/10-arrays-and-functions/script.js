// Take a look at the following example were we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array

const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}
addFlower(flowers);
console.log(flowers);

/**
 * The flower array have 3 elements
 * The funtion addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr
 * We call addFlower() with an argument of flowers which will execute the code inside addFlower
 * We check the value of flowers and it now includes the 'lily' element! The array was mutaded!
 */

// When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we're actually passing the function is a reference to where the variable memory is stored and changing the memory.

// Exercise
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}
changeArr(concept);
console.log(changeArr(concept));

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);
