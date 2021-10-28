/**
 * In our code, when we want to stop a loop from continuing to execute even though the orignal stopping condtion we wrote for our loop hasn't been met, we can use the keyword break.
 * The break keyword allows programs to 'break out of the loop from within the loop's block.
 */

// Example
for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana");
}
console.log("Orange you glad I broke out the loop");
/**
 * break statemens can be especially helpful when we're looping through large data structures! With breaks, we can add test conditions besides the stopping condtion, and exit the loop when they're met.
 */

// Exercise
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
