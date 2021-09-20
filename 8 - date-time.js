// Date()
const today = new Date();
const month = today.getMonth(); // Zero Based
const date = today.getDate();
const day = today.getFullYear();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const milliseconds = today.getMilliseconds();
const time = today.getTime();

console.group('Date()');
  console.log(`Today - ${today}`);
  console.log(`Month - ${month}`);
  console.log(`Date - ${date}`);
  console.log(`Day - ${day}`);
  console.log(`Hours - ${hours}`);
  console.log(`Minutes - ${minutes}`);
  console.log(`Seconds - ${seconds}`);
  console.log(`Milliseconds - ${milliseconds}`);
  console.log(`Time - ${time}`);
console.groupEnd();

// Manipulating Date()
const birthday = new Date('1-1-70 11:25:00');
console.group('Original Birthday Date');
  console.log(birthday);
console.groupEnd();

const setMonth = birthday.setMonth(4);
const setDate = birthday.setDate(14);
const setFullYear = birthday.setFullYear(1999);
console.group('Modified Birthday Date');
  console.log(birthday);
console.groupEnd();