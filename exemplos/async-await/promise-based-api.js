/*
https://alligator.io/js/async-functions/#async-functions-with-promise-based-apis

Async Functions With Promise-Based APIS
As we showed in our primer to the Fetch API, web APIs that are
promise-based are a perfect candidate for async functions:
*/

// esse exemplo deve ser executado no navegador porque o node não tem o fetch
// essa api demora um pouco para responder.

async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map(user => user.username);

  console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');
// ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", ... ]