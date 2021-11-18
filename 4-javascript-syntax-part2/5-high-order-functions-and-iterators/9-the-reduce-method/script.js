/*
Another widely used interation method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
*/

const numbers = [1,2,4,10]

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(summedNums); // output: 17
/*
Let's go over the use of .reduce() from the example above:
- numbers is an array that contains numbers.
- summedNums is a variable that stores the returned valuw of invoking .reduce() on numbers.
- numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
- The callback funtion has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see he value of accumulator and currentValue change, review the chart above.
- As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the furst argument is the callback function). For instance:
*/

const numbers = [1,2,4,10]

const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},100) // <- second argument for .reduce()

console.log(summedNums); // output: 117

// Exercise
const newNumbers = [1,3,5,7]

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(`The value of accumulato: `, accumulator);
console.log(`The value of currentValue: `, currentValue);
