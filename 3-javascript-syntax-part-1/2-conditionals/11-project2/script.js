let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 19;

if (runnersAge >= 18 && registeredEarly) {
  raceNumber += 1000;
}
if ((runnersAge = 18 && registeredEarly)) {
  console.log(`${raceNumber} you will race at 9:30 am.`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`${raceNumber} you'll race at 11:00 am.`);
} else if (runnersAge < 18) {
  console.log(`${raceNumber} you will race at 12:30 pm.`);
} else {
  console.log("See the registration desk.");
}
