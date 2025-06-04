// Recursive version
function fibs(n) {
  if (n <= 0) return new Error('?');
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  const prev = fibs(n - 1);
  return [...prev, prev[n - 2] + prev[n - 3]];
}

// console.log(fibs(3)); // [0, 1, 1]
// console.log(fibs(4)); // [0, 1, 1, 2]
// console.log(fibs(6)); // [0, 1, 1, 2, 3, 5]

// Iterative version
function fibsIter(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
  }
  return arr;
}

console.log(fibsIter(7)); // [0, 1, 1, 2]
