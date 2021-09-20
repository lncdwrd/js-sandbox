// Primitive Data Types
const pdtName = 'John Doe'; // String
const pdtAge = 45;          // Number
const pdtHasKids = true;    // Boolean
const pdtCar = null;        // Null
let pdtTest;                // Undefined
const pdtSym = Symbol();    // Symbol

console.group('Primitive Data Types');
  console.log(typeof pdtName);
  console.log(typeof pdtAge);
  console.log(typeof pdtHasKids);
  console.log(typeof pdtCar);
  console.log(typeof pdtTest);
  console.log(typeof pdtSym);
console.groupEnd();

// Reference Data Types (Objects Only)
const rdtHobbies = ['movies', 'music']; // Array
const rdtAddress = { city: 'Boston' };  // Object Literal
const rdtToday = new Date();            // Object Literal

console.group('Primitive Data Types');
  console.log(typeof rdtHobbies);
  console.log(typeof rdtAddress);
  console.log(typeof rdtToday);
console.groupEnd();