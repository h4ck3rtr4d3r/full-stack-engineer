// we can change this:
const squareNum = (num) => {
  return num * num;
};

// to this:
const squareNum = (num) => num * num;

/** Notice the following changes:
 * The parentheses around num have been remove, since it has a single parameter.
 * The curly braces {} have been removed since the function consists of a single-line block.
 * The return keyword has been removed since the function consists of a single-line block.
 */

// Exercices
const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
