const num1 = 100;
const num2 = 50;

// Arithmetic Operators
const sum = num1 + num2;
const difference = num1 + num2;
const product = num1 * num2;
const quotient = num1 / num2;
const modulus = num1 % num2;

console.group('Arithmetic Operators')
  console.log(sum);
  console.log(difference);
  console.log(product);
  console.log(quotient);
  console.log(modulus);
console.groupEnd();

// Math Object
const pi = Math.PI;
const eulersNum = Math.E;
const round = Math.round(1.567);
const roundUp = Math.ceil(1.234);
const roundDown = Math.floor(1.567);
const square = Math.sqrt(2);
const absolute = Math.abs(-3);
const power = Math.pow(5, 2);
const smallestNum = Math.min(2, 33, 4, 1, 55, 6, 3);
const biggestNum = Math.min(2, 33, 4, 1, 55, 6, 3);
const randomNum = Math.random();

console.group('Math Object')
  console.log(pi);
  console.log(eulersNum);
  console.log(round);
  console.log(roundUp);
  console.log(roundDown);
  console.log(square);
  console.log(absolute);
  console.log(power);
  console.log(smallestNum);
  console.log(biggestNum);
  console.log(randomNum);
console.groupEnd();



// Random Number Generator
  // Numbers 1 - 20 Only
const randomizer = Math.floor(Math.random() * 20 + 1);

console.group('Random Number Generator')
  console.log(randomizer);
console.groupEnd();