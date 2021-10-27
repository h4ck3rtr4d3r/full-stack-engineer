/**
 * We can use a for loop to perform the same operation on each element on an array.
 * To loop through each element in an array, a for loop should use the array's .length property in its condition.
 */

// Example:

const animals = ["Grizzle Bear", "Sloth", "Sea Lion"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
/**
 * In the loop above, w've named our iterator variable i. This is a variable naming convention you'll see in a lot of loops. We can think of this variable i as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.lenght.
 */

// Exercise
const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}
