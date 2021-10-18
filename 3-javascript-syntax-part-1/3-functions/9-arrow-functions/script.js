// Arrow functions syntax is a shorter way to write functions by using the special "fat arrow" () => notation.
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
console.log(rectangleArea(4, 4));

// Exercises
const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
