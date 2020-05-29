
// Exemplo:

async function hello() {
  return 'Hello Alligator!';
}

const b = hello();
console.log(b); // [object Promise] { ... }


// Exemplo:
// Since what’s returned is a promise, you could do something like this instead:

const c = hello();
c.then(x => console.log(x)); // Hello Alligator!


// Exemplo:
hello().then(x => console.log(x)); // Hello Alligator!