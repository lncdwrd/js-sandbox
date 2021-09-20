const KEY1 = Symbol();
const KEY2 = Symbol();

const myObj = {};

myObj[KEY1] = 'Prop 1';
myObj[KEY2] = 'Prop 2';

console.log(myObj[KEY1] === myObj[KEY2]);
console.log(Symbol() === Symbol());