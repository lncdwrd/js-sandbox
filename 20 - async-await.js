async function makeRequest(url) {
  try {
    const response = await fetch(url);
    const checkResponse = await checkFetch(response);
    const data = await checkResponse.json();
    return data;
  } catch(err) {
    throw Error(err);
  }
}

function checkFetch(res) {
  if (!res.ok) {
    throw Error(`${res.error}, ${res.status}, ${res.statusText}`);
  }
  return res;
}

makeRequest('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data));