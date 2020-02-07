/*
You can also refer to a "named" function; Alert "Hello" every 3 seconds (3000 milliseconds):
*/

var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 2000);
}

function alertFunc() {
  console.log("Hello!");
}

myFunction();