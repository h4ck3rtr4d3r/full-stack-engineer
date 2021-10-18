/**
  When writing conditional statements, sometimes we need to use different types of operators to compare values.
  These operators are called comparsion operators.
  Here is a list of some comparison operators and theis syntax:
  * Less than: <
  * Greater than: >
  * Less than or equal to: <=
  * Greater than or equal to: >=
  * Is equato to: ===
  * Is not equal to: !==
 */

console.log(10 < 12);
console.log("apples" === "oranges");

// All the comparison statements evaluates to either true or false and are made up of: two values that will be compared and an operator that separates the values and compares them accordingly( >, <, <=, >=, ===, !==)

let hungerLevel = 3;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
