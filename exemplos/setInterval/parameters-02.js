// However, if you use an anonymous function, it will work in all browsers:

var myVar;
var demo = "";
var demo2 = "";

function myStartFunction() {
  myVar = setInterval(function() {
    alertFunc("First parameter", "Second parameter");
  }, 2000);
}

function alertFunc(param1, param2) {
  demo += "Hello ";
  console.log("demo:", demo);

  demo2 = "Parameters passed to alertFunc(): " + param1 + " --- " + param2;
  console.log("demo2:", demo2);
  console.log('--------------------------------');
}

function myStopFunction() {
  clearInterval(myVar);
}

myStartFunction();
// myStopFunction(); //se descomentar essa linha não imprime nada
