/**
 In JavaScript, there are operators that work with boolean values know as logical operators. There are three logical operators:
 * the and operator (&&)
 * the or operator (||)
 * the not operator, otherwise know as the bang operator(!)  
 */

// The && Operator
let stopLight = "green";
let pedestrians = 0;
if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}
/**
 When using the && operator, both conditions must evaluate to true for the entire condition to evaluates to true and execute.
 Otherwise, if either confition is false, the && condition will evaluate to false and the else block will execute.
 */

// The || operator
let day = "Monday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Do some work.");
}

/**
   When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true.
*/

// The ! not operator
let excited = true;
console.log(!excited);

let sleepy = false;
console.log(!sleepy);
/**
 Essentianly, the ! operator ill either take a true value and pass back false, or it will take a false value and pass back true. 
*/

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
