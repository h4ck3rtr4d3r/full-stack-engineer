const tipCalculator = (quality, total) => {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
};
/*
// As a function declaration:
function tipCalculator(quality, total) {
  switch (quality) {
      case 'bad':
          return total * .05;
      case 'ok':
          return total * .15;
      case 'good':
          return total * .20;
      case 'excellent':
          return total * .30;
      default:
          return total * .18;

  }
}
*/
console.log(tipCalculator("good", 100));
