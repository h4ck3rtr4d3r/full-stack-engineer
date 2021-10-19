/**
 * Scope is the context in which our variables are declared. We think about scope in relation to blocks because vairiables can exist either outsde of or within these blocks.
 * In global scope, variables are called global variables. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.
 */

const color = "blue";
const returnSkyColor = () => {
  return color;
};
console.log(returnSkyColor());
/**
 * Even though the color variables is deined outside of the block,it can beaccessed in the function block, giving it global scope.
 * in turn, color can be accessed within the returnSkcolor funcion block.
 */

const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and" + galaxy;
}
console.log(callMyNightSky());
