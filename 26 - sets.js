const set1 = new Set();

set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);

// Checking Values
console.group('Checking Values');
  console.log(set1);
  console.log(set1.size);
  console.log(set1.has(100));
  console.log(set1.has(50 + 50));
  console.log(set1.has({name: 'John'})); // False due to objects being a reference
console.groupEnd();

// Using Methods
set1.delete('A string');
console.group('Using Methods');
  console.log(set1);
console.groupEnd();

// Iterate
set1.delete('A string');
console.group('Iterate');
  for (let item of set1) {
    console.log(item);
  }
console.groupEnd();

// Set Items via Array
const set2 = new Set([1, true, 'hello']);

console.log(set2);