/**
 * ES6 introduced some new shortcuts for assigning properties to variables know as destructuring.
 * In the previous exercise, we create a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameters name we assigned to it. To remind ourselves, here's a truncated version of the factory function:
 */

const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

/**
 * Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:
 */

// const monsterFactory = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };
// Notice that we don't have to repeat ourselves for property assignments!

// Exercise

function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

const newRobot = robotFactory("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);
