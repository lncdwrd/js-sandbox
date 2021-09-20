// Declarations
var varDec = 'I am a var.';       // Global or Function
let letDec = 'I am a let.';       // Block Scoped
const constDec = 'I am a const.'  // Block Scoped

console.group('Declarations');
  console.log(varDec);
  console.log(letDec);
  console.log(constDec);
console.groupEnd();