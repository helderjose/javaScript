// Pass parameters to the alertFunc function (does not work in IE9 and earlier):

var myVar;
var demo = '';
var demo2 = '';

function myStartFunction() {
  myVar = setInterval(alertFunc, 2000, "First parameter", "Second parameter");
}

function alertFunc(param1, param2) {
  demo += "Hello ";
  console.log('demo:', demo);

  demo2 = "Parameters passed to alertFunc(): " + param1 + " --- " + param2;
  console.log('demo2:', demo2);
}

function myStopFunction() {
  clearInterval(myVar);
}

myStartFunction();
// myStopFunction(); //se descomentar essa linha não imprime nada