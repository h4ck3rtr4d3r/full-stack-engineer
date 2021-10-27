/**
 * When we have a loop runing inside another loop, we call that a nested loop. One use for a nested fo loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
 */

// Example:
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both loops have the number: " + yourArray[j]);
    }
  }
}
/**
 * In this example, for each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the curent element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.
 */

// Exercise
let bobsFollowers = ["John", "Michael", "Louis", "Lisa"];
let tinasFollowers = ["Larry", "Lisa", "Michael"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(mutualFollowers.push(tinasFollowers[j]));
    }
  }
}
console.log(mutualFollowers);
