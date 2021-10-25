// When an array cointains another array it is know as a nested array.

const nestedArr = [[1], [2, 3]];
// To access the nested arrays we can use bracket notation whith the index value, just like we did to access any other element:
console.log(nestedArr[1]);
// Notice that nestedArr[1] will grab the element in index 1 which is the array [2,3]. Then, if we wanted to access the elements within the nested aray we can chain, or add on, more bracket notation with index values:
console.log(nestedArr[1][0]);
// In this console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2,3]. Then to grab he first element from that array, we use nestedArr[1][0] and we get the value of 2.

//Exercise
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = numberClusters[2][1];
console.log(target);
