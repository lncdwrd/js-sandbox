// Accessing Object
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2021 - this.age;
  }
}

const userFirstName = person.firstName;
const userLastName = person['lastName'];
const userAge = person.age;
const userHobbies = person.hobbies[0];
const userCity = person.address.city;
const userState = person.address['state'];
const userBirthYear = person.getBirthYear();

console.group('Accessing Object');
  console.log(userFirstName);
  console.log(userLastName);
  console.log(userAge);
  console.log(userHobbies);
  console.log(userCity);
  console.log(userState);
  console.log(userBirthYear);
console.groupEnd();

// Access Objects Through Loops
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
]
console.group('Access Objects Through Loops');
  for(let i = 0; i < people.length; i++) {
      console.log(people[i].name);
  }
console.groupEnd();