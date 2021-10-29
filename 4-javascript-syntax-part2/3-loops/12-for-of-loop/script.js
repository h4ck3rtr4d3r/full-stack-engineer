/**
 * Here is an example of iterating over each element in an array using a traditional for loop with an index variable:
 */
const hobbies = ["singing", "eating", "quidditch", "writing"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

/**
 * And here is an example of iterating through the same array using a for...of loop:
 */
const friends = ["Ariella", "Tabata", "Dominc"];
for (const friend of friends) {
  console.log(`I love my dear friend ${friend}`);
}
