// In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:
let groceryItem = "papaya";
if (groceryItem === "tomato") {
  console.log("Tomatos are $0.49");
} else if (groceryItem === "papaya") {
  console.log("Papaya are $1.29");
} else {
  console.log("Invalid item");
}
// A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:
let groceryItem1 = "papaya";
switch (groceryItem1) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papaya are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}
/**
 * The switch keyword initiates the statement and is followed by (...), wich contains the value that each case will compare. In the example, the value or expression of the switch statement is grocecyItem1.
 * Inside the block, {...}, there are multiple case. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem1 equalled 'tomato', that case console.log() would run.
 * The value of groceryItem1 is 'papaya', so the third case runs - Papayas are $1.29 is logged to the console.
 * The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of wheter or not it matches - including thke default. This behavior is different from if/else conditional statements tkhat execute only one blocl of code.
 * At the end of each switch statement, ther is a default statement. If none of the case are true, then the code in that default statement will run.
 */
let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("you get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}
