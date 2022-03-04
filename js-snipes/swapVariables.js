let a = 10;
let b = 20;
console.log(`a: ${a}, b: ${b}`);

// 1 - Destructuring
// [a, b] = [b, a]

// 2 - Temporary variable
// const temp = a;
// a = b;
// b = temp;

// 3 - Addition and Difference
// a = a + b;
// b = a - b;
// a = a - b;

// 4 - Bitwise XOR Operator
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

console.log(`a: ${a}, b: ${b}`); // for all the 4 cases above, the result will be -> a: 20, b: 10