/**
 * We use curly braces, {}, to designate an object literal:
 */
let spaceship = {}; // spaceship is an empty obeject
/**
 * We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a locaion in memory that holds a value.
 * A key's value can be of any data type in the language including functions or other objects.
 * We make a key-value pair by writing the ky's name, or identifies, followed by a colon and then te value. We separate each key-value pair in an object literal with a comma(,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us o omit the quotation marks:
 */

// An object literal with two key-value pairs
let spaceshipX = {
  "Fuel Type": "diesel",
  color: "silver",
};
/**
 * The spaceshipx object has two properties Fuel Type and color. 'Fuel Type' has quotatio marks because it contains a space character.
 */

// Exercise:
let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};
console.log(fasterShip);
