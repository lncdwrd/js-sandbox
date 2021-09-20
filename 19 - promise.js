async function makeRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(checkFetch)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}

function checkFetch(res) {
  if (!res.ok) {
    throw Error(`${res.error}, ${res.status}, ${res.statusText}`);
  }
  return res;
}

makeRequest('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data));