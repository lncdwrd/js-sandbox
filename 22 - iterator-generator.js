// Iterator
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

const nameArr = ['Jack', 'Jill', 'John'];
const names = nameIterator(nameArr);
console.group('Iterator');
  console.log(names.next().value);
  console.log(names.next().value);
  console.log(names.next().value);
  console.log(names.next());
console.groupEnd();



// Generator
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const nameGenerator = sayNames();
console.group('Generator');
  console.log(nameGenerator.next().value);
  console.log(nameGenerator.next().value);
  console.log(nameGenerator.next().value);
  console.log(nameGenerator.next());
console.groupEnd();



// Sample: ID Generator
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const idGenerator = createIds();
console.group('Id Generator');
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
console.groupEnd();