// Get Sleep Hours
const getSleepHours = (day) => {
  if (day === "monday") {
    return 6;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 9;
  } else if (day === "saturday") {
    return 4;
  } else if (day === "sunday") {
    return 8;
  }
};

// Actual Sleep Hours
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// Ideal Sleep Hours
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// Sleep Debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealHours = getIdealSleepHours();

  if (actualSleepHours === idealHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealHours) {
    console.log("You got more sleep than needed");
  } else if (actualSleepHours < idealHours) {
    console.log("you should get some rest");
  }
};
calculateSleepDebt();
