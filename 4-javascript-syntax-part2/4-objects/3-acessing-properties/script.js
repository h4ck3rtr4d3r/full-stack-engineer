/**
 * 
 There are two ways we can access an object's property. Let's explore the first way - dot notation .
 You've used do notation to access the properties and methods of built-in objects and data instances.
 Whith property dot notation, we write the object's name, followed by the dot operator and then the property name (key):
 */

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flithPtah: ["Venus", "Mars", "Saturn"],
};
spaceship.homePlanet;
spaceship.color;
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
// If we try to access a property that does not exist on that object, undefined will be returned
