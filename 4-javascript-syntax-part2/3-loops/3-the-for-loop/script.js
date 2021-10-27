// for loops allow us to tell computers to repeat a given block of code on its own.

/**
 * A for loop contains three expressions separate by ; inside the parentheses:
 * 1. an initialization starts the loop and can also be used to dexlare the iterator variable
 * 2. a stopping condition is the condition tha the iterator variable is evaluated against - if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
 * 3. an iteration statement is used to update the iterator variable on each loop
 */

// Example:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

/**
 * Let's breaking down the example:
 * The initialization is let counter = 0, so the loop will start counting at 0.
 * The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
 * The iteration statement is counter++. This mean after each loop. the value of counter will increase by 1. For the first interation counter will equal 0, for the second iteration counter will equal 1, and so on.
 * The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 - the point that the condition becomes false is sometimes called the stop condition.
 */

for (let fiveToTen = 5; fiveToTen < 11; fiveToTen++) {
  console.log(fiveToTen);
}
