let isNightTime = true;
if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

// We can use a ternary operator to perform the same functionality:
isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");
/**
 * In the example above:
 * The condition, is NightTime, is provided before the ?.
 * Two expressions follow the ? and are separated by a colom :
 * If the condition evaluates to true, the first expression executes.
 * If the condition evaluates to false, the second expression executes.
 */

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");
//

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");
//

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
