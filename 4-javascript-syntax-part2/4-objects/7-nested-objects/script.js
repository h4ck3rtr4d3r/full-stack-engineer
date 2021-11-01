/**
 * In application code, objects are often nested - an object might have another object as a property which in turn could have a property that's an array of even more objects!
 * Let's see an example:
 */
const spaceship = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encounrageTeam() {
        console.log("We got this");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

/**
 * We can chain operators to access nested properties. We'll have to pay attention to which operator makes sense to use in each layer.It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.
 */
spaceship.nanoelectronics["back-up"].battery;
/**
 * In the preceding code:
 * First the computer evaluates spaceship.nanoeletronics, which results in an object containing the back-up and computer objects.
 * We accessed the back-up object by appending ['back-up'].
 * The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'.
 */

// Exercise
let spaceshipX = {
  passengers: [{ name: "Space Dog" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encounrageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
let capFave = spaceshipX.crew.captain["favorite foods"][0];
console.log(capFave);
let firstPassenger = spaceshipX.passengers[0];
console.log(firstPassenger);
