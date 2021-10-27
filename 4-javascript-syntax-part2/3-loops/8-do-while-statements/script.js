// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = "";
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);
console.log(typeof countString);

/**
 * In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it.
 * First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops whn the condition evalutes to false.
 * Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.
 */
