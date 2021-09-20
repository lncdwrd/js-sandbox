// Access Object Array
const person = [
  {id: 1, lastName: 'Belarmino'},
  {id: 12, lastName: 'Belarmino'},
  {id: 20, lastName: 'Belarmino'},
];

const ids = person.map(function (user) {
  return user.id;
})

console.group('Object Array');
  console.log(ids);
console.groupEnd();


// Access nested arrays and properties
const getMaterials = {
  pencil: ['fabercastle', 'generic brand'],
  eraser: 'mario eraser'
}

console.group('Nest Array inside Object')
  for (let i in getMaterials) {
    if (Array.isArray(getMaterials[i]) === true) {
      getMaterials[i].map(function (arrayItem) {
        console.log(arrayItem);
      })

    } else {
      console.log(`${i} : ${getMaterials[i]}`);
    }
  }
console.groupEnd();