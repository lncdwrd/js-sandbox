/**
 * Study:
 * https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript
 * https://www.youtube.com/watch?v=r7v6EIiHfVA
 */


/**
 * Comparison Operators
 * >, <, >=, <=, ===, and !==
 */
const id = 100;

// Equal To Value (loose-equals)
console.group('Equal To Value');
  if (id == 100) {
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
console.groupEnd();

// Not Equal To Value
console.group('Not Equal To Value');
  if (id != 100) {
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
console.groupEnd();

// Equal To Value & Type (strict-equals)
console.group('Equal To Value & Type');
  if (id === '100')  { // String
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
console.groupEnd();

// Not Equal To Value & Type
console.group('Not Equal To Value & Type');
  if (id !== '100')  { // String
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
console.groupEnd();

// Unary Operators
console.group('Unary Operators');
  if (typeof id !== 'undefined') {
    console.log(`Id is ${id}`);
  } else {
    console.log('Missing id');
  }
console.groupEnd();

// Binary Operators
console.group('Binary Operators');
  if (id > 99) {
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
console.groupEnd();

// Else If
console.group('Else If Statement');
  if (id === 100) {
    console.log('Id is exactly 100');
  } else if (id > 100) {
    console.log('Id is more than 100');
  } else {
    console.log('Id is less than 100');
  }
console.groupEnd();



/**
* Logical Operators
* &&, ||, and !
*/
const name = 'Steve';
const age = 12;

// && (And) Operator
console.group('&& (And) Operator');
  if (age > 0 && age <= 12) {
    console.log(`${name} is a child`);
  } else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
  } else {
    console.log(`${name} is an adult`);
  }
console.groupEnd();

// || (Or) Operator
console.group('|| (Or) Operator');
  if (age < 16 || age > 60) {
    console.log(`${name} can't run in the race.`);
  } else {
    console.log(`${name} is registered for the race`);
  }
console.groupEnd();



/**
* Ternary/Conditional Operator
* condition ? exprIfTrue : exprIfFalse
*/
console.group('Ternary Operator');
  // Boolean Value
  console.log(true ? 1 : 2);
  
  // Binary Operator
  console.log(id === 100 ? 'Correct' : 'Incorrect');

  // Function
  function getStatus(isMember) {
    return (isMember ? `Yes, you're a member.` : `No, you're not a member.`);
  }
  console.log(getStatus(true));
console.groupEnd();



/**
 * Competition Rules:
 * Only Ages 18 - 24 Can Enter
 */

const userAge = 40;

if (userAge > 18 && userAge < 24) {
  console.log('Valid');
} else {
  console.log('Not eligible to join.');
}

if (userAge < 18 || userAge > 24) {
  console.log('Not eligible to join.');
} else {
  console.log('Valid');
}

console.log(userAge > 18 && userAge < 24)
console.log(userAge < 18 || userAge > 24);

const a = true;
const b = true;

console.log(a && b);