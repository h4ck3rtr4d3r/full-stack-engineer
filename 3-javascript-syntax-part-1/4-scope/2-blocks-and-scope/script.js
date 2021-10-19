/**
 * A block is the code found inside a set of curly braces {}.Blocks help us group one or more statements together and serve as an important structural marker ffor our code.
 * A block of code could be a function, like this:
 */

const logSkyColor = () => {
  let color = "blue";
  console.log("blue");
};
logSkyColor();

let dusk;
if (dusk) {
  let color1 = "pink";
  console.log(color1);
} else {
  console.log("who cares?");
}

// Exercises
const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "Stars over the " + skyscraper + " in " + city;
}
console.log(logCitySkyline());

/**
 * Notice that the logCitySkyline function is able to access both variables without any problems.
 */
