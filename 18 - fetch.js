let checkFetch = (res) => {
  if (!res.ok) {
    throw Error(`${res.error}, ${res.status}, ${res.statusText}`);
  }
  return res;
}


document.querySelector('#fetch-1').addEventListener('click', getText);

function getText() {
  fetch('data.txt')
    .then(checkFetch)
    .then(res => res.text())
    .then(data => {
      document.querySelector('#fetch-output').innerHTML = data;
    })
    .catch(console.log);
}


document.querySelector('#fetch-2').addEventListener('click', getJSON);

function getJSON() {
  fetch('customers.json')
    .then(checkFetch)
    .then(res => res.json())
    .then(data => {
      data.forEach(function(customer) {
        document.querySelector('#fetch-output').innerHTML += `<li>${customer.name}</li>`;
      });
    })
    .catch(console.log);
}