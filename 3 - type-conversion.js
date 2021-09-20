// Number To String
const numVal1 = String(555);
console.group('Number to string')
  console.log(numVal1);
  console.log(typeof numVal1);
  console.log(numVal1.length);
console.groupEnd();

const numVal2 = String(4 + 4);
console.group('Number to string with operation')
  console.log(numVal2);
  console.log(typeof numVal2);
  console.log(numVal2.length);
console.groupEnd();

// Boolean To String
const boolVal = String(true);
console.group('Boolean To String')
  console.log(boolVal);
  console.log(typeof boolVal);
  console.log(boolVal.length);
console.groupEnd();

// Date To String
const dateVal = String(new Date());
console.group('Date To String')
  console.log(dateVal);
  console.log(typeof dateVal);
  console.log(dateVal.length);
console.groupEnd();

// Array To String
const arrayVal = String([1, 2, 3, 4, 5]);
console.group('Array To String')
  console.log(arrayVal);
  console.log(typeof arrayVal);
  console.log(arrayVal.length);
console.groupEnd();

// toString()
const tsVal = (true).toString();
console.group('Boolean To String')
  console.log(tsVal);
  console.log(typeof tsVal);
  console.log(tsVal.length);
console.groupEnd();



// String To Number
const stringVal = Number('5');
console.group('String To Number')
  console.log(stringVal);
  console.log(typeof stringVal);
console.groupEnd();

// Boolean To Number
const trueVal = Number(true);
console.group('True Boolean To Number')
  console.log(trueVal);
  console.log(typeof trueVal);
console.groupEnd();

const falseVal = Number(false);
console.group('False Boolean To Number')
  console.log(falseVal);
  console.log(typeof falseVal);
console.groupEnd();

// Null To Number
const nullVal = Number(null);
console.group('False Boolean To Number')
  console.log(nullVal);
  console.log(typeof nullVal);
console.groupEnd();

// NaN (Not a Number)
const nanVal = Number('Hello');
console.group('False Boolean To Number')
  console.log(nanVal);
  console.log(typeof nanVal);
console.groupEnd();