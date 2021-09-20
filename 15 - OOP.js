// Constructor & Prototype
function Person(name) {
  this.name = name;
}

Person.prototype.greeting = function() {
  return `Hello there ${this.name}.`;
}

const person1 = new Person('John');

console.group('Constructor & Prototype');
  console.log(person1);
  console.log(person1.name);
  console.log(person1.greeting());
console.groupEnd();



// Inheritance
function Customer(name, phone, membership) {
  Person.call(this, name);

  this.phone = phone;
  this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 123, 'Gold');

console.group('Inheritance')
  console.log(customer1);
  console.log(customer1.name);
  console.log(customer1.phone);
  console.log(customer1.membership);
  console.log(customer1.greeting());
console.groupEnd();



// Object.create
const personPrototypes = {
  legal: function() {
    return (this.age >= 21) ? 'Legal' : 'Not Legal';
  }
}

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
})

console.group('Object.create');
  console.log(brad);
  console.log(brad.legal());
console.groupEnd();



// Class
class Staff {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hello there ${this.name}`
  }

  static helpCustomers() {
    return `Helping customers`;
  }
}

class Manager extends Staff {
  constructor(name, phone, position) {
    super(name);

    this.phone = phone;
    this.position = position;
  }

  static guideStaff() {
    return `Guiding staffs`;
  }
}

const staff1 = new Manager('Josh', 123, 'Head Manager');

console.group('Class');
  console.log(staff1);
  console.log(staff1.name);
  console.log(Manager.helpCustomers());
  console.log(Manager.guideStaff());
console.groupEnd();