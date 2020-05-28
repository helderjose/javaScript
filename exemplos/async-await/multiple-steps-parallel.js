function who() {
  console.log("who() start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("who() finish 2000 milliseconds");
      resolve('The clown');
    }, 2000);
  });
}

function what() {
  console.log("what() start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("what() finish - 1000 milliseconds");
      resolve('lurks');
    }, 1000);
  });
}

function where() {
  console.log("where() start");
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("where() finish - 500 milliseconds");
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  // array destructuring
  const [a, b, c] = await Promise.all([who(), what(), where()]);

  console.log(`${ a } ${ b } ${ c }`);
}

msg(); // The clown lurks in the shadows <-- after some seconds

/*
saída:
who() start
what() start
where() start
where() finish - 500 milliseconds
what() finish - 1000 milliseconds
who() finish 2000 milliseconds
The clown lurks in the shadows
*/

/*
Nesse exemplos as promises são chamadas
em paralelo (não espera uma terminar para chamar a outra)
e cada uma responde no seu tempo.
*/
