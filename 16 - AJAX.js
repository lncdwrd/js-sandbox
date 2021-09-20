// XML Plain Text
document.querySelector('#xml').addEventListener('click', loadData);

function loadData(e) {
  e.preventDefault();
  console.log('1');

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onprogress = function() {
    console.log('Loading...', xhr.readyState);
  }

  xhr.onerror = function() {
    console.log('Request error.');
  }

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      document.querySelector('#output').innerHTML =
      `<h1>${this.responseText}</h1>`
    }
  }

  xhr.send();
}



// XML JSON
document.querySelector('#json-1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      
      const customer = JSON.parse(this.responseText);

      document.querySelector('#customer').innerHTML = `
      <ul>
        <li>${customer.id}</li>
        <li>${customer.name}</li>
        <li>${customer.company}</li>
        <li>${customer.phone}</li>
      </ul>
      `;
    }
  }

  xhr.send();
}

document.querySelector('#json-2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      customers.forEach(function(customer) {
        document.querySelector('#customer').innerHTML += `
          <ul>
            <li>${customer.id}</li>
            <li>${customer.name}</li>
            <li>${customer.company}</li>
            <li>${customer.phone}</li>
          </ul>
          `;
      });
    }
  }

  xhr.send();
}