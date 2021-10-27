// Let's convert a for loop into a while loop:

// A for loop tha prints 1, 2 and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}

// A while loop that prints 1, 2 and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
/**
 * The counterTow variable is declare before the loop. We can access it inside our while loop since it's in the global scope
 * We start ou loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condtion evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop
 * Next, we have our loop's code block which prints counterTwo to the console and increments counterTwo.
 * If we didn't increment counterTwo inside our block, then counterTwo would always have its initial value, 1. Tha would mean the testing condition counterTwo<4 would always evaluate to true and our loop would never stop running! This is called an infinite loop and it's something we always want to avoid. Infinite loops can freezing your computer.
 * The syntax of a for loop is ideal when we know how many times the loop should run, but we don't always know this in advance.
 * In situations when we want a loop to execute an undetermined number of times, while loops are te best choice.
 */

// Exercise

const cards = ["diamond", "spade", "heart", "club"];

let currentCard;
while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
