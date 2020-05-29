function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 or 1, at random

    val ? resolve('Lucky!!') : reject('Nope 😠');
  });
}

/*
Given that async functions always return a promise, you can also
deal with unhandled errors as you would normally using
a catch statement:
*/
// note que essa function nao trata erro
async function msg() {
  const msg = await yayOrNay();
  console.log(msg);
}

msg().catch(x => console.log(x));
msg().catch(x => console.log(x));
msg().catch(x => console.log(x));
msg().catch(x => console.log(x));
msg().catch(x => console.log(x));