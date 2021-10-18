// Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
function greeting(name = "stranger") {
  console.log(` Hello, ${name}!`);
}
greeting("Nick");
greeting();
/**
 * In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case e ever want to include a non-personalized default greeting!
 * When the code calls greeting('Nick')the value of the argument is passe in and, 'Nick', will override the default parameter of 'steranger' to log 'Hello, Nick!' to the console.
 * When there isn't an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.
 */

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();
