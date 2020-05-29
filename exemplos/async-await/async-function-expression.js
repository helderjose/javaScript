function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Clown');
    }, 2000);
  });
}


/*
Here’s the async function from our first example, but defined as a function expression:
*/
const msg = async function() {
  const msg = await scaryClown();
  console.log('Message:', msg);
}

msg();