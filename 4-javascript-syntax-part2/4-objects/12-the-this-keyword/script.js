/**
 * Objects are collections of related data and functionality. We store that functionality in methods on or objects.
 */

const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
};

/**
 * in our goat object we have .makeSound()method. We can invoke the .makeSound() method on goat.
 */
goat.makeSound(); // Prints baaa

/**
 * now, what if we wanted to add a new method to our goat object called .diet() that prints the goat's dietType?
 */

// const goat2 = {
//   dietType: "herbivore",
//   makeSound() {
//     console.log("baaa");
//   },
//   diet() {
//     console.log(dietType);
//   },
// };
// goat2.diet(); // Output will be "ReferenceError: dietType is not defined"

/**
 * Whey is dietType not defined even though it's a property of goat? That's because inside the scope of te .diet() method, we don't automatically have access to other properties of the goat object.
 * Here's where the this keyword comes to the rescues. If we change the .diet() method to use this, the .diet()works
 */
const goat3 = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};
goat3.diet();

/**
 * The this keyword references the calling object which provides access to the calling object's properties. In the example above, the calling object is goat and by using this we're accessing the goat object itself, and then the dietType property of goat by using property dot notation.
 */

// Exercise:

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  },
};
console.log(robot.provideInfo());
