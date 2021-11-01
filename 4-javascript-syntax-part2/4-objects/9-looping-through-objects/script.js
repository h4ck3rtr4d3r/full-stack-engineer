/**
 * JavaScript has given us alternative solution for iterating through objects with the for...in syntax.
 * for...in will execute a given block of code for each property in an object.
 * Example:
 */
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Enginnering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      annouce() {
        console.log("Jets on!");
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The thank is full!");
      },
    },
  },
};
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}:${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}
