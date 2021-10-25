// Let's learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
// One method .push() allow us to add items to the end of an array.

// Example:

const itemTracker = ["item 0", "item 1", "item2"];
itemTracker.push("item 3", "item 4");
console.log(itemTracker);

/**
 * We access the push method by using dot notation, connecting push to itemTracker with a period.
 * Then we call it like a function. That's because .push() is a function and one that JavaScript allow us to use right on an array.
 * .push() can take a single argument or multiple arguments separated by commas. In this case, we're adding two elements 'item 3' and 'item 4' to itemTracker.
 * Notice that .push() changes, or mutates itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
 * .push() is a method that will mutate an array by adding elements to it.
 */

const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("make dinner", "clean the bedroom");
console.log(chores);
