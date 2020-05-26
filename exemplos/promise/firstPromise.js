/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
// In this example, we use setTimeout(...) to simulate async code.
// In reality, you will probably be using something like XHR or an HTML5 API.
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout( function() {
    // comente e descomente as linhas abaixo para testar os dois cenários.
    resolve("Success!")  // Yay! Everything went well!
    // reject('Unable to fulfill promise');  // something was wrong
  }, 1000)
})

myFirstPromise.then((successMessage) => {
  // promise "resolve"
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
}, (errorMessage) => {
  // promise "reject"
  console.log('Error: ', errorMessage);
}).catch((error) => {
  // esse exemplo nunca entra no catch
  console.log("No catch")
})