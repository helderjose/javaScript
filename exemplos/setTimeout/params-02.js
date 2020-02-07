/*
However, if you use an anonymous function, it will work in all browsers:
*/

var myVar;
var demo = '';
var demo2 = '';

function myStartFunction() {
  myVar = setTimeout(function(){ alertFunc("First parameter", "Second parameter"); }, 1000);
}

function alertFunc(param1, param2) {
  demo += "Hello ";
  console.log('demo:', demo);

  demo2 = "Parameters passed to alertFunc(): \n" + param1 + "\n" + param2 + "\n";
  console.log('demo2:', demo2);
}

myStartFunction();