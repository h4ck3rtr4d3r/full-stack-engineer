/**
 * The second way to access a key's value is by using bracket notation, [].
 * You've used bracket notation when indexing an array.
 * To use bracket notation to access an object's property, we pass in the property name(key) as a string.
 * We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
 */

let spaceship = {
  "Fuel Type": "Turbo Diesel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};
let isActive = spaceship["Active Mission"];
spaceship["Fuel Type"];
spaceship["numCrew"];

let propName = "Active Mission";
console.log(spaceship[propName]);
/**
 * With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
 */
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, "homePlanet");
/**
 * If we tried to write our returnAnyProp() function with dot notation(objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.
 */
