/**
 * Objects are mutable meaning we can update them after we create them.
 * We can use either dot notation or bracket notation, and assignment operator to add new key-value pairs to an object or change an existing property.
 * One of two things can happen with propery assignment:
 * If the property already exists on the object, whatever value it held before will be replaced wih the newly assigned value.
 * If there was no property with that name, a new property will be added to the object.
 * It's important to know that although we can't reassing an obect declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there
 */
let spaceship = {
  "Fuel Type": "Turbo Diesel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
  type: "shuttle",
  mission: "Explore the Universe",
};
spaceship.type = "Alien"; // Changes the value of the type property
spaceship.speed = "Mach 5"; // Creates a new key of 'speed' with a value of 'Mach 5'.
delete spaceship.mission; // Removes the mission property.
