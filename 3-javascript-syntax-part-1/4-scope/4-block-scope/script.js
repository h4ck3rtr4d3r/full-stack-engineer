/**
 * When a variable is deined insidea block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is onoly accessible to the lines of code within that block.
 * Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block
 */

const logSkyColor = () => {
  let color = "blue";
  console.log(color);
};
logSkyColor();
//console.log(color); // ReferenceError

/**
 * You'll notice:
 * We define a function logSkyColor()
 * Within the function, the color variable is only available within the curly braces of the function
 * If we try to log the same variable outside the function,it throws a ReferenceError.
 */

// Exercises

function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves); // Notice that it log a RefrenceError since the variable is tied to the block scope of the function!
