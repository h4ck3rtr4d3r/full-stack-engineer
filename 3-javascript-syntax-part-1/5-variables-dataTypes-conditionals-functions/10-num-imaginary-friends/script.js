function numImaginaryFriends(friends) {
  const imaginaryFriends = Math.ceil(friends * (1 / 4));
  return imaginaryFriends;
}
console.log(numImaginaryFriends(10));
