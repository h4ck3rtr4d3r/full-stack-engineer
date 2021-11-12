/**
 * When the data stored on an object is a function we call that a method. A method is what an object does.
 * For example console is a global JavaScript object and .log() is a mehod on that object. Math is also a global JavaScript object and .floor() is a method on it.
 * We can include methods in our object literal by creating ordinary, comma-separated key-value pairs. The key serves as our method's name, while the value is an anonymous function expression
 */

// With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip = {
  invade() {
    console.log(
      "Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon."
    );
  },
};
/**
 * Object methods are invoked by appending the object's name with the dot operator followed by the method name and parentheses:
 */
alienShip.invade();

// Exercise
let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

let alienShipx = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
alienShipx.retreat();
alienShipx.takeOff();
