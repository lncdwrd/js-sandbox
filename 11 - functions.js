// Function Declaration
function greet(firstName = 'John', lastName = 'Doe') {
  return `Hello ${firstName} ${lastName}`;
}

// Function Expression
const square = function (x = 3) {
  return x * x;
}

console.log(square());

// IIFE
(function (name) {
  console.log(`Hello ${name}`);
})('Brad');

// Method
const todo = {
  add: function () {
    console.log('Add todo...');
  }
}

todo.add();

// Arrow Functions
const squareNum = num => num * num;
const multipleNum = (num1, num2) => num1 * num2;
const twoSquared = () => 2 * 2;



// Map
var arr1 = [1, 2, 3];

function mapForEach(arr, fn) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      // Invokes fn
      fn(arr[i])
    );
  }

  return newArr;
}

var arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});

console.log(arr2);

var limitCheck = (limit) => {
  return (item) => item > limit
}

var arr3 = mapForEach(arr1, limitCheck(1));

console.log(arr3);

// Mapping Shortcut
var arr4 = arr1.map((num) => num > 1);

console.log(arr4);



// Currying
const addCustomer = fn => (...args) => {
  console.log('saving customer info...');
  console.log(fn, ...args);
  return fn(...args);
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`);
  console.log(fn, ...args);
  return fn(...args);
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
}

completeOrder = (processOrder(completeOrder));
completeOrder = (addCustomer(completeOrder));
completeOrder('1000');



// Advanced Currying
const curry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  }
}

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);

console.log(curriedTotal(10)(20)(30));