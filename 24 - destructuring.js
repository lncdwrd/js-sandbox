// Destructuring Assignment
const [a, b] = [100, 200];
const [c, d, ...rest] = [300, 400, 500, 600, 700];

console.group('Destructuring Assignment');
  console.log(a, b);
  console.log(c, b, rest);
console.groupEnd();



// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;

console.group('Array Destructuring');
  console.log(person1, person2, person3);
console.groupEnd();



// Parse Array From Function
function getPeople() {
  return ['Pedro', 'Smith', 'Lemon'];
}

let [person4, person5, person6] = getPeople();

console.group('Parse Array From Function');
  console.log(person4, person5, person6);
console.groupEnd();



// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

const {name, age, city, gender} = person;

console.group('Object Destructuring');
  console.log(name, age, city, gender);
console.groupEnd();