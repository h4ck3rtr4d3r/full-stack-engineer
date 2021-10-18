// You need to use a const value here
const kelvin = 293;
// Since celsius is 273 degrees less than Kelvin we use this calculus below
let celsius = 273 - kelvin;
//bellow wwe use this formula to find teh fahrenheit value
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
