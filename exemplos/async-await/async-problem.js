function getName () {
  setTimeout(() => {
    return "Homer Simpson"
  }, 2000);
}

function main () {
  let name = getName(); // linha 1
  console.log(name); // linha 2 // undefined
}

/*
  Esse exemplo retorna undefined porque a
  linha 2 é executada antes do retorno do getName().
  A promise e o async await resolve esse problema, veja
  os próximos exemplos.
*/
main();