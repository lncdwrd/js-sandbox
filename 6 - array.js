const numbers = [ 2, 1, 4, 5, 3];
const strings = ["Hello", "there", "sir"];
const nato = ["Beta", "Charlie", "Alpha"];

// Get array length
const arrLength = numbers.length;

console.group('Array Length');
  console.log(arrLength);
console.groupEnd();

// Check if array
const arrCheck = Array.isArray(numbers);

console.group('Array Length');
  console.log(arrCheck);
console.groupEnd();

// Get value
const arrValue = strings[2];

console.group('Get Value');
  console.log(arrValue);
console.groupEnd();

// Insert into array
numbers[5] = 6;

console.group('Insert Into Array');
  console.log(numbers);
console.groupEnd();

// Find index
const arrIndex = numbers.indexOf(2);

console.group('Find Index');
  console.log(arrIndex);
console.groupEnd();

// Mutating Arrays
numbers.push(7);              // Add to the end
numbers.unshift(0);           // Add to the start
numbers.push("Not A Number"); //
numbers.pop();                // Remove end
numbers.shift();              // Remove start
numbers.splice(0, 1);         // Splice values
numbers.reverse();            // Reverse array

console.group('Mutating Array');
  console.log(numbers);
console.groupEnd();

// Concatenating Arrays
const arrConcat = numbers.concat(strings);

console.group('Concatenating Arrays');
  console.log(arrConcat);
console.groupEnd();

// Sorting Arrays
const arrStringSort = nato.sort();
const arrNumSort = numbers.sort(function(x, y) {
  // console.log(`Comparing ${x} and ${y}`)
  return x - y;
});

console.group('Sorting Arrays');
  console.log(arrStringSort);
  console.log(arrNumSort);
console.groupEnd();

// Find
const arrFindNum = numbers.find(under2);

function under2(num) {
  return num < 2;
}

console.group('Find');
  console.log(arrFindNum);
console.groupEnd();