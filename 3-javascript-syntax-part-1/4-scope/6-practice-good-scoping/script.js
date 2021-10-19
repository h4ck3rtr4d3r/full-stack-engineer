/**
 * Tightly coping your variables will grealy improve your code in several ways:
 */

// Example
// const logSkyColor = () => {
//   const dusk = true;
//   let color = "blue";
//   if (dusk) {
//     let color = "pink";
//     console.log(color);
//   }
//   console.log(color);
// };

// console.log(color);

/** Here,you'll notice:
 * We create a variable dusk inside the logSkyColor() function.
 * After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if he if statement is tuthy.
 * Within the if block, the color variables holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
 * While we use block scope, we still pollute our namespace by reusing the same variable name twice. A beter practice would be to rename the variable inside the block.
 * Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!
 */

// Exercise
const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Artic";

  if (region === "The Artic") console.log(lightWaves);
};
logVisibleLightWaves();
