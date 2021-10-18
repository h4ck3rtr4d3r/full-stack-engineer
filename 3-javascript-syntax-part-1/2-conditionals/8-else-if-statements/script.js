/**
 * The else if statement allows for more than two possible outcomes. You can add as manu else if statements as you'd like, to make more complex conditionals!
 * The else if statement always comes after the if statement and before the else statement.
 * The else if statement also takes a condition.
 */
let stopLight = "yellow";
if (stopLight === "red") {
  console.log("Stop!");
} else if (stopLight === "yellow") {
  console.log("Slow down.");
} else if (stopLight === "green") {
  console.log("Go!");
} else {
  console.log("Caution, unknown!");
}

let season = "summer";
if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}
