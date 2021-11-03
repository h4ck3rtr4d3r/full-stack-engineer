/**
 * It's simple, just avoid using arrow functions when using his in a method.
 */

// Exercise:
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%`);
  },
};
robot.checkEnergy();
