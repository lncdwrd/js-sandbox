const map1 = new Map();
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

console.group('Mapping');
  console.log(map1.get(key1));
  console.log(map1.get(key2));
  console.log(map1.get(key3));
  console.log(map1.size);
console.groupEnd();

// Iterate
console.group('Iterate Key & Map');
  map1.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
console.groupEnd();

console.group('Iterate Keys');
  for (let key of map1.keys()) {
    console.log(key);
  }
console.groupEnd();

console.group('Iterate Values');
  for (let value of map1.values()) {
    console.log(value);
  }
console.groupEnd();

// Convert To Arrays
const keyValArr = Array.from(map1);
const keyArr = Array.from(map1.keys());
const valArr = Array.from(map1.values());

console.group('Convert To Arrays');
  console.log(keyValArr);
  console.log(keyArr);
  console.log(valArr);
console.groupEnd();
