//

let seasons = ["Winter", "Spring", "Summer"];
seasons[3] = "Autumn";
console.log(seasons);

/**
 * in the example above, the season array is updated by adding a new element to the end of the array.
 * However we decide that we prederred to say 'Autumn' instead of 'Fall'
 * The line, seasons[3] = 'Autumn'; tell us that we want to replace the element at index 3 with the value 'Autumn'.
 */

// Exercises: Change the second element of he array groceryList to 'avocados'

let groceryList = ["bread", "tomatoes", "milk"];
groceryList[1] = "avocados";
console.log(groceryList);
