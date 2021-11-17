/*
Another useful iterator method is .filter(), Like .map(), .filter() returns a nwe array. However, .filer() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true of false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:
*/

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
  return word.lenght < 6;
});

/*
- words is an array that contains strings elements.
- const shortWords = declares a new variable that will store the returned array from invoking .filter().
- The callback function is an arrow function that as a single parameter, word. Each element in the words array will be passed to this function as an argument.
- word.lenght < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

Let's also check the values of words and shortWords:
*/

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

/*
Observe how words was not mutated, i.e. changed, and shortWords is a new array.
*/

// Exercise:

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

