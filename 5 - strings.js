const firstName = 'John';
const lastName = 'Doe';
const fruits = 'Apple, Banana, Orange';

// Concatenation
const concat = firstName + ' ' + lastName;

console.group('Concatenation');
  console.log(concat);
console.groupEnd();

// Concat Method
const concatMethod = firstName.concat(' ', lastName);

console.group('Concat Method');
  console.log(concatMethod);
console.groupEnd();

// Append
let append;
append = firstName;
append += ' ';
append += lastName;

console.group('Append');
  console.log(append);
console.groupEnd();

// Template Literals (Template Strings)
const tempLit = `Hello, ${firstName} ${lastName}`;

console.group('Template Literals');
  console.log(tempLit);
console.groupEnd();

// Escaping
const esc = 'John\'s great escape.'

console.group('Escaping');
  console.log(esc);
console.groupEnd();

// Length
const length = firstName.length;

console.group('Length');
  console.log(length);
console.groupEnd();

// Change String Case
const upCase = firstName.toUpperCase();
const lowCase = firstName.toLowerCase();

console.group('Change');
  console.log(upCase);
  console.log(lowCase);
console.groupEnd();

// Locate string
const numIndex = firstName[0];
const charAt = firstName.charAt(0);
const indexOf = firstName.indexOf('J');
const lastIndexOf = firstName.lastIndexOf('J');
const substring = firstName.substring(0, 1); // (Start, End)
const slice = firstName.slice(1, 2);

console.group('Character Access');
  console.log(numIndex);
  console.log(charAt);
  console.log(indexOf);
  console.log(lastIndexOf);
  console.log(substring);
  console.log(slice);
console.groupEnd();

// Split string
const split = fruits.split(', ');

console.group('Split String');
  console.log(split);
console.groupEnd();

// Replace string
const replace = fruits.replace('Apple', 'Mango');

console.group('Locate String');
  console.log(replace);
console.groupEnd();

// Includes string
const includes = fruits.includes('Apple');

console.group('Includes String');
  console.log(includes);
console.groupEnd();