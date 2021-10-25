/**
 * We can declare variables with the let keyword and const keyword. When we use let, we can reassign the value of the variable, but when we use const, we cannot reassign the value of the variable.
 * But the elements of an array can be reassigned even when we use const. wha we cannot do with is reassing a new array or a different value to the same array.
 */

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];
console.log(condiments);

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];
utensils[3] = "Spoon";
console.log(utensils);
