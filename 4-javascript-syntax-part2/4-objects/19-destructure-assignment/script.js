/**
 * Destructed Assignment
 * We often want to extract key-value pairs from objects and sabe hem as variables. Take for example the following object:
 */

const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};
/**
 * If we want to extract the residence property as a variable, we could use the following code:
 */
// const residence = vampire.residence;
// console.log(residence);

/**
 * However, we can also take advantage of a destructing technique called destructure assignment to save ourselves some keystrokes. In destructured assignment we create a variable in curly braces {} and assign to it the object.
 */
const { residence } = vampire;
console.log(residence);

/**
 * Look back at the vampire object's properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log he value of residence to the console, 'Transylvania' is printed.
 * We can even use destructured assignment to grab nested properties of an object:
 */

const { day } = vampire.preferences;
console.log(day);

// Exercise

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};
const { functionality } = robot;
functionality.beep();
