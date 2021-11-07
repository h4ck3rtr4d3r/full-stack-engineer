/**
 * In the previous exercises we've been creating instances of objects that have their own methods. Butm we can also take advantage of built-in methods for Objects!
 * For example, we have access to objects instance methods like: .hasOwnProperty(), .valueOf(), and many more!
 */

// Exercise
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};
// What is missing in the following method call?
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Declare robotEntries below this line
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign(robot) && {
  laserBlaster: true,
  voiceRecognition: true,
};

console.log(newRobot);
