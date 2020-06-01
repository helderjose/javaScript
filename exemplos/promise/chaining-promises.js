/*
  https://alligator.io/js/promises-es6/#chaining-promises

  Chaining Promises:
  Promises can also be chained together with multiple then functions. The return
  value of a then becomes the value available to the next then in the chain:
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
  console.log('Received: ' + data + " - primeiro then");
  let moreData = "Another payload";
  return moreData;
}).then(data => {
  console.log(data +  " - segundo then");
}).catch(() => {
  console.log("There was an error");
});