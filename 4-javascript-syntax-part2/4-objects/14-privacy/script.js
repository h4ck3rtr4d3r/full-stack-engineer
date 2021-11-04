/**
 * When discussing privacy in objects, we define it as the idea that only certain properties should be mutable r able to change in value.
 * JavaScript developers follow naming conventions tha signal to other developers how to interact with a property. Ine common convention is to place an underscore _ before the name of a property to mean that the property should bot be altered.
 */

const bankAccount = {
  _amount: 1000,
};

/**
 * In the example above, the _amount is not intended to be directly manipulated.
 * Even so, it is still possible to reassign _amount:
 */

bankAccount._amount = 100000;

console.log(bankAccount._amount);

// Exercise:
const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%`);
  },
};
robot._energyLevel = "high ";
robot.recharge();
