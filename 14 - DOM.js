const node = document.querySelector('.item-class');
const nodeParent = document.querySelector('.list-class');
const taskInput = document.querySelector('.text-input');
const btn = document.querySelector('button');



/**
 * Selecting
 */

// Single Select
  console.log(document.querySelector('ul'));
  console.log(document.querySelector('ul').getElementsByClassName('item-class'));
  console.log(document.querySelectorAll('ul li'));
  console.log(document.getElementById('list-id'));
  console.log(document.getElementById('list-id').id); // Return Id
  console.log(document.getElementById('list-id').className); // Return Class

// Multiple Select
console.log(document.getElementsByClassName('item-class')); // Returns HTML Collection
console.log(document.getElementsByClassName('item-class')[0]); // Returns Element
console.log(document.getElementsByTagName('li')); // Returns HTML Collection
console.log(document.getElementsByTagName('li')[0]); // Returns Element

// Returns All Nodes
console.log(nodeParent.childNodes);
console.log(nodeParent.childNodes[0]);
console.log(nodeParent.childNodes[0].nodeName);
console.log(nodeParent.childNodes[0].nodeType);
console.log(nodeParent.firstChild);
console.log(nodeParent.lastChild);

// Returns Only Elements
console.log(nodeParent.children);
console.log(nodeParent.children[1]);
console.log(nodeParent.children[0].children);
console.log(nodeParent.firstElementChild);
console.log(nodeParent.lastElementChild);

console.log(nodeParent.childElementCount);
console.log(node.parentNode); // Returns Element
console.log(node.nextSibling);
console.log(nodeParent.children[1].previousSibling); // Returns All Nodes
console.log(nodeParent.children[1].nextElementSibling);
console.log(nodeParent.children[1].previousElementSibling);

console.log(node.classList);
console.log(node.classList[1]);
console.log(node.className);
console.log(node.getAttribute('class'));
console.log(node.hasAttribute('class')); // Returns Value



/**
 * Creating, Adding, Removing
 */

document.createElement('body');
document.createTextNode('Hello World');
node.appendChild();
node.setAttribute('href', '#');
node.className = 'class-name';
node.classList.add('test');

parentNode.replaceChild(newElement, oldElement);
node[0].remove();
parentNode.removeChild(lis[3]);
node.classList.remove('class');
link.set



/**
 * Event Listener & Event Object
 */

// Method 1
btn.addEventListener('click', function () {
  console.log('Hello World');
});

// Method 2
btn.addEventListener('click', onClick);

function onClick(e) {
  // Event Objects
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);

  e.target.innerText = 'Hello';
}



/**
 * Mouse & Keyboard Events
 */

// Mouse
btn.addEventListener('click', runEvent);
btn.addEventListener('dblclick', runEvent);
btn.addEventListener('mousedown', runEvent);
btn.addEventListener('mouseup', runEvent);
btn.addEventListener('mouseenter', runEvent);
btn.addEventListener('mouseleave', runEvent);
btn.addEventListener('mouseenter', runEvent);
btn.addEventListener('mouseleave', runEvent);
btn.addEventListener('mouseover', runEvent);
btn.addEventListener('mouseout', runEvent);
btn.addEventListener('mousemove', runEvent);

// Keyboard
taskInput.addEventListener('submit', runEvent);
taskInput.addEventListener('keydown', runEvent);
taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('keypress', runEvent);
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  console.log(`Typing: ${e.target.value}`);
}



/**
 * Examples
 */

// Creating
let createItem = (itemName) => {
  const li = document.createElement('li');
  li.className = 'collection-item';

  const link = document.createElement('a');
  li.appendChild(document.createTextNode(`${itemName}`));
  li.appendChild(link);
  link.setAttribute('href', '#');
  link.className = 'delete-item secondary-content';

  const icon = document.createElement('i');
  link.appendChild(icon);
  icon.className = 'fa fa-remove';

  document.querySelector('ul.collection').appendChild(li);
}

createItem('Amazing');

// Deleting
const deleteBtn = document.querySelectorAll('.delete-item');

deleteBtn.forEach((e) => {
  e.addEventListener('click', function (event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
      let listItem = event.target.parentElement.parentElement;
      listItem.remove();
    }
  });
});

deleteBtn.forEach((e) => {
  e.addEventListener('click', deleteItem);
})

function deleteItem(e) {
  e.currentTarget.parentElement.remove();
}