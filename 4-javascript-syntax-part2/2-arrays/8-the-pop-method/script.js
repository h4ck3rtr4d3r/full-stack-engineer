// The .pop() method removes the last item of an array

const newItemTracker = ["item 0", "item 1", "item 2"];
const removed = newItemTracker.pop();

console.log(newItemTracker);
console.log(removed);

/**
 * In the example above, calling .pop() o the newItemTracker array remove the item 2 from the end.
 * .pop() does not take any arguments, it simply removes the last element of newItemTracker.
 * .pop() returns the value of the last element. In the example, we store the return value in a variable removed to be use for later.
 * .pop() is a method that mutates the initial array
 */

// Exercise
const chores = [
  "whash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];
chores.pop();
console.log(chores);
