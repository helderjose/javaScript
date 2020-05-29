function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Clown');
    }, 2000);
  });
}

/*
Here’s that same example once again, but this time defined as an arrow function:
*/

const msg = async () => {
  const msg = await scaryClown();
  console.log('Message:', msg);
}

msg();