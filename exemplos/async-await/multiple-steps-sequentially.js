function who() {
  console.log("who() start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("who() finish");
      resolve('The clown');
    }, 2000);
  });
}

function what() {
  console.log("what() start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("what() finish");
      resolve('lurks');
    }, 1000);
  });
}

function where() {
  console.log("where() start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("where() finish");
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  // as três linhas serão executadas na ordem
  const a = await who();
  const b = await what();
  const c = await where();

  // só vai chegar aqui quando todas as promises forem resolvidas
  console.log(`${ a } ${ b } ${ c }`);
}

msg();

/*
saída:
who() start
who() finish
what() start
what() finish
where() start
where() finish
The clown lurks in the shadows
*/

/*
  Nesse exemplos as funções sempre serão executadas
  na mesma ordem que foram chamada na function msg() (serão executadas sequencialmente), não
  importa o tempo que cada uma demore para finalizar.
*/
