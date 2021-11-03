/**
 * Now, we gonna learn:
 * how o use the this keyword.
 * conveying privacy in JavaScrip methods.
 * defining getters and setters in objecs
 * creating factory functions
 * using destructuring techniques
 */

// Example:
const robot = {
  model: "B-4MI",
  mobile: true,
  greeeting() {
    console.log(`I'm model ${this.model}, how may I be of service?`);
  },
};

const massProdRobt = (model, mobile) => {
  return {
    model,
    mobile,
    greeeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    },
  };
};

const shnyNewRobot = massProdRobt("TryHax", true);

const chargingStation = {
  _name: "Eletrons-R-Us",
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ["Low N Slow", "Middle of the Road", "In and Output"],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === "number") {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change${newCapacity} to a number.`);
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  },
};
