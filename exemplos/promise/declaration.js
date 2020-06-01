/*
  https://alligator.io/js/promises-es6/

  Here's how we declare a basic promise. Below you would
  normally call something asynchronous like an
  external API for example. Here we're simulating with
  a setTimeout function:
*/

let myPromise = new Promise((resolve, reject) => {
  let data;
  setTimeout(() => {

    // comente essa linha para simular o reject
    data = "Some payload";

    if (data) {
      resolve(data);
    } else {
      reject();
    }
  }, 2000);
});


myPromise.then(data => {
  console.log('Received: ' + data);
}).catch(() => {
  console.log("There was an error");
});